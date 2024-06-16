import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import StarRating from '../StarRating/StarRating';

function MovieView() {
    const location = useLocation();
    const navigate = useNavigate()
    const { state }  = location;
    
    const data = state?.data;
    const isEdit = state?.isEdit;
  return (
    <>
        <div className='flex flex-row justify-center items-center h-screen w-full overflow-y-auto'>
            <div className='flex flex-col w-[650px] h-auto border rounded-xl bg-slate-200 border-slate-400'> 
                <div className='py-4 px-2'>
                    <h1 className='text-2xl text-center'>Movie Detials</h1>
                </div>
                <div className='flex flex-col gap-4 justify-center items-center py-6 px-4'>
                    <h3>Name : {data?.title}</h3>
                    <h3>Year : {data?.year}</h3>
                    <h3>Genre : {data?.genre}</h3>
                    <div className='flex flex-row'>
                        <h3 className='px-3'>Rating : </h3>
                        <div>
                            <StarRating rating={data.rating}/>
                        </div>
                    </div>
                    <div className='flex flex-row gap-2'>
                        <h3>Description : </h3>
                        <h5 className='text-left w-[13rem]'>{data?.desc}</h5>
                    </div>
                    <div className='flex flex-row gap-2'>
                        <h3>Review : </h3>
                        <h5 className='text-left w-[13rem]'>{data?.review}</h5>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default MovieView