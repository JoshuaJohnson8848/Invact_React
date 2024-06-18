import React, { useEffect, useState } from 'react'
import './MovieList.css'
import StarRating from '../StarRating/StarRating'
import { useNavigate } from 'react-router-dom'
import Modal from '../Modal/Modal'
import { deleteMovie, getAllMovies } from '../../services/MovieServices'
import { useGlobalContext } from '../../context/GlobalProvider'


function MovieList({ status }) {
    const [movies, setMovies] = useState([])
    const navigate = useNavigate();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { movieId, setMovieId, setIsEdit, setIsLoading } = useGlobalContext();
    const [deleteId, setdDeleteId] = useState('')

    useEffect(() => {
        if(status){
            fetchAllMovies(status)
        } else {
            fetchAllMovies()
        }
    }, [])
    

    const handleDeleteClick = (id) => {
        setdDeleteId(id);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const onDelete = async() => {
        const res = await deleteMovie(deleteId)
        if(res?.data?.deleted){
            setIsModalOpen(false);
            fetchAllMovies();
        }
    }

    const fetchAllMovies = async(status) => {
        let res;

        if(status){
            res = await getAllMovies(status);
        } else {
            res = await getAllMovies();
        }
        setMovies(res);
    }

    const handleViewOneData = (id) => {
        navigate(`/view?movieId=${id}`);
    }

    const handleEditOneData = (id) => {
        navigate(`/add?isEdit=${true}&movieId=${id}`);
    }

  return (
    <>
        <div className='grid grid-cols-12 gap-x-8 gap-y-6 px-8'>
        {movies.length > 0 && movies.map((data)=>{
            return (
            <div className='w-22 col-span-4 xl:col-span-4 lg:col-span-4 md:col-span-6 sm:col-span-12 border border-slate-400 rounded-xl bg-slate-200 transition-transform transform hover:scale-105 hover:border-green-600'>
                <div className='flex flex-col'>
                    <div className='h-60 border border-slate-400 rounded-xl overflow-hidden'>
                        <img className='object-cover w-full h-full' src={data.photo} alt="Image" onError={(e) => {e.target.src = '/not-image-available.png'}} />
                    </div>
                    <div className='flex flex-col justify-start items-start px-2 py-2'>
                        <h1 className='text-start text-2xl pb-1'>{data?.title} | {data?.year}</h1>
                        <h3 className='text-start text-md pb-1'>{data?.genre}</h3>
                        <div className='flex flex-row justify-between gap-28'>
                            <div className='flex flex-row'>
                                <StarRating rating={data.rating} /><span className='pl-4'>{data.rating}</span>
                            </div>
                            <div className='flex flex-row'>
                                <span class="material-symbols-outlined cursor-pointer " onClick={()=>handleViewOneData(data?._id)}>visibility</span>
                                <span class="material-symbols-outlined cursor-pointer px-2" onClick={()=>handleDeleteClick(data?._id)}>delete</span>
                                <span class="material-symbols-outlined cursor-pointer" onClick={()=>handleEditOneData(data?._id)}>movie_edit</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            )
        })}
        </div>
        <Modal title="delete" isOpen={isModalOpen} onClose={handleCloseModal} onSubmit={onDelete} />
    </>
  )
}

export default MovieList