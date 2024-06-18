import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import StarRating from '../StarRating/StarRating';
import { getMovie } from '../../services/MovieServices';
import { useGlobalContext } from '../../context/GlobalProvider'

function MovieView() {
    const location = useLocation();
    const navigate = useNavigate();
    const [isWatched, setIsWatched] = useState(false);
    const [data, setData] = useState({});
    const [isLoading, setIsLoading] = useState(false)
    
    const queryParams = new URLSearchParams(location.search);
    const movieId = queryParams.get('movieId');
    
    useEffect(() => {
        setIsLoading(true)
        fetchMovie(movieId);
    }, [movieId])
    

    const fetchMovie = async(id) => {
        const res = await getMovie(id);
        if(res){
            console.log(res);
            setData(res);
            setIsLoading(false)
        }
    }

  return (
    <>
        {!isLoading && <div className='flex flex-row justify-center items-center h-screen w-full overflow-y-auto'>
            <div className='flex flex-col w-[650px] h-auto border rounded-xl bg-slate-200 border-slate-400'> 
                <div className='py-4 px-2'>
                    <h1 className='text-2xl text-center'>Movie Detials</h1>
                </div>
                <div className='flex flex-col gap-4 justify-center items-start py-1 px-4'>
                    <div className='w-full'>
                        <div className='flex flex-row justify-center items-center w-full'>
                            <img className='w-[450px] border rounded-lg h-[200px]' src={data.photo} alt="" onError={(e) => {e.target.src = '/not-image-available.png'}}/>
                        </div>
                    </div>
                    <h3>Name : {data?.title}</h3>
                    <h3>Year : {data?.year}</h3>
                    <h3>Genre : {data?.genre}</h3>
                    <div className='flex flex-row'>
                        <h3 className=''>Rating : </h3>
                        <div>
                            <StarRating rating={data.rating}/>
                        </div>
                    </div>
                    <div>
                        <span>
                            <h3>View Status : <button type='submit' className={`px-4 py-2 font-semibold text-sm rounded-lg shadow-md focus:outline-none transition-colors duration-300 ${(data?.watched) ? 'bg-green-500 text-white' : 'bg-red-500 text-white'}`}>{(data?.watched) ? 'Watched' : 'Unwatched'}</button></h3>
                        </span>
                    </div>
                    <div className='flex flex-row gap-2'>
                        <h3>Description : </h3>
                        <h5 className='text-left w-[400px]'>{data?.desc}</h5>
                    </div>
                    <div className='flex flex-row gap-2 pb-2'>
                        <h3>Review : </h3>
                        <h5 className='text-left w-[400px]'>{data?.review}</h5>
                    </div>
                    <div className='flex flex-row justify-end items-end w-full h-12 pt-2'>
                        <div className='p-2'>
                            <button className='hover:bg-sky-800 px-2 bg-sky-600 text-white border rounded-md' onClick={()=>navigate(`/review?movieId=${data?._id}`)}>Edit Review</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>}
    </>
  )
}

export default MovieView