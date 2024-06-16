import React from 'react'

function TopBar() {
  return (
    <>
       <div className="flex flex-row justify-start items-center bg-amber-400 px-4 h-16 border-b border-slate-400 text-slate-600 shadow-lg">
          <img className="w-10 h-10" src="/vite.svg" alt="logo" />
          <h1 className='text-right'>Invact Movies</h1>
      </div>
    </>
  )
}

export default TopBar