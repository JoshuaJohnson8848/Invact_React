import React from 'react'

function TopBar() {
  return (
    <>
       <div className="flex flex-row justify-start items-center bg-sky-500 px-6 h-16 border-b border-slate-400 text-slate-600 shadow-lg">
          <img className="w-10 h-10" src="/vite.svg" alt="logo" />
          <h1 className='text-right text-2xl text-white'>Invact Movies</h1>
      </div>
    </>
  )
}

export default TopBar