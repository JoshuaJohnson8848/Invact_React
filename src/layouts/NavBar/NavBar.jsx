import React from 'react'

function NavBar() {
  return (
    <>
        <div className='flex flex-row bg-amber-400 border px-6 py-4 w-44 h-screen border-r-slate-400'>
            <div className='flex flex-col gap-4'>
                <ul className='cursor-pointer text-white hover:text-blue-950'>
                    Add Movie
                </ul>
                <ul className='cursor-pointer text-white hover:text-blue-950'>
                    Edit Movie
                </ul>
            </div>
        </div>
    </>
  )
}

export default NavBar