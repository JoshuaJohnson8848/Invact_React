import React from 'react'

function StarRating({ rating }) {
    let stars = [];
    let unfilledStars = [];

    for(let i=1; i<=rating; i++){
        stars.push(
            <>
                <img className='w-6 h-6' src="/filled-star.png" alt="" />
            </>
        )
    }

    for(let i=1; i<=(5-rating); i++){
        unfilledStars.push(
            <>
                <span class="material-symbols-outlined">star</span>
            </>
        )
    }

  return (
    <>
        <div className='flex flex-row justify-start items-start'>
            {stars}{(unfilledStars.length != 5) ? unfilledStars : 'Not Rated Yet'}
        </div>
    </>
  )
}

export default StarRating