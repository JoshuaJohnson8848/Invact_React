import React from 'react'
import MovieList from '../MovieList/MovieList'
import { useNavigate } from 'react-router-dom'

function Watched() {
  const navigate = useNavigate();

  return (
    <>
        <div className='flex flex-col py-6'>
          <div className='flex flex-row justify-end px-8 pb-4'>
            <div className='flex justify-center items-center w-24 h-12 border rounded-lg bg-sky-600'>
              <button className='flex justify-center items-center text-white' onClick={()=>{navigate('/add')}}>
                <span className="material-symbols-outlined">add</span>
                <span className='ml-1'>Add</span>
              </button>
            </div>
          </div>
          <div>
            <MovieList status="watched"/>
          </div>
        </div>
    </>
  )
}

export default Watched;