import React from 'react'
import './MovieList.css'
import StarRating from '../StarRating/StarRating'
import { useNavigate } from 'react-router-dom'

const movies = [
    {
        title: 'Pushpa',
        desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima repellendus consequuntur, ipsa. Aut tempora dolorum, quasi recusandae illo deserunt! Blanditiis minima voluptas',
        year: '2022',
        genre: 'Action',
        rating: 3,
        review: 'Good Film'
    },
    {
        title: 'Bunny',
        desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima repellendus consequuntur, ipsa. Aut tempora dolorum, quasi recusandae illo deserunt! Blanditiis minima voluptas',
        year: '2016',
        genre: 'Comedy',
        rating: 2,
        review: 'Good Film'

    },
    {
        title: 'Pushpa 2',
        desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima repellendus consequuntur, ipsa. Aut tempora dolorum, quasi recusandae illo deserunt! Blanditiis minima voluptas',
        year: '2024',
        genre: 'Action',
        rating: 4,
        review: 'Good Film'

    },
    {
        title: 'Oppam',
        desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima repellendus consequuntur, ipsa. Aut tempora dolorum, quasi recusandae illo deserunt! Blanditiis minima voluptas',
        year: '2025',
        genre: 'Thriller',
        rating: 2,
        review: 'Good Film'

    },
    {
        title: 'Aadu',
        desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima repellendus consequuntur, ipsa. Aut tempora dolorum, quasi recusandae illo deserunt! Blanditiis minima voluptas',
        year: '2018',
        genre: 'Comdey',
        rating: 1,
        review: 'Good Film'

    },
    {
        title: 'Premam',
        desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima repellendus consequuntur, ipsa. Aut tempora dolorum, quasi recusandae illo deserunt! Blanditiis minima voluptas',
        year: '2015',
        genre: 'Romance',
        rating: 4,
        review: 'Good Film'

    },
    {
        title: 'Devara',
        desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima repellendus consequuntur, ipsa. Aut tempora dolorum, quasi recusandae illo deserunt! Blanditiis minima voluptas',
        year: '2024',
        genre: 'Action',
        rating: 4,
        review: 'Very Good Film'

    },
]

function MovieList() {
    const navigate = useNavigate();
  return (
    <>
        <div className='grid grid-cols-12 gap-x-8 gap-y-6 px-8'>
        {movies.length > 0 && movies.map((data)=>{
            return (
            <div className='w-22 col-span-4 xl:col-span-4 lg:col-span-4 md:col-span-6 sm:col-span-12 border border-slate-400 rounded-xl bg-slate-200 transition-transform transform hover:scale-105 hover:border-green-600'>
                <div className='flex flex-col'>
                    <div className='border border-slate-400 rounded-xl'>
                        <img className='object-cover border rounded-xl' src="/not-image-available.png" alt="No Image" />
                    </div>
                    <div className='flex flex-col justify-start items-start px-2 py-2'>
                        <h1 className='text-start text-2xl pb-1'>{data?.title} | {data?.year}</h1>
                        <h3 className='text-start text-md pb-1'>{data?.genre}</h3>
                        <div className='flex flex-row justify-between gap-28'>
                            <div className='flex flex-row'>
                                <StarRating rating={data.rating} /><span className='pl-4'>{data.rating}/5</span>
                            </div>
                            <div className='flex flex-row'>
                                <span class="material-symbols-outlined cursor-pointer " onClick={()=>{navigate('/view', { state: { data }})}}>visibility</span>
                                <span class="material-symbols-outlined cursor-pointer px-2" >delete</span>
                                <span class="material-symbols-outlined cursor-pointer" onClick={()=>{navigate('/add', { state: { isEdit: true, data }})}}>movie_edit</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            )
        })}
        </div>
    </>
  )
}

export default MovieList