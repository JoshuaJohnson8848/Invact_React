import React from 'react'
import { useNavigate } from 'react-router-dom'

function NavBar() {

    const navigate = useNavigate();
    const currentUrl = window.location.href.split('/')[3];
    console.log(currentUrl);

  return (
    <>
        <div className='flex flex-row bg-sky-500 border pl-6 py-4 lg:w-44 md:w-40 sm:w-36 h-screen border-r-slate-400'>
            <div className='flex flex-col gap-4'>
                <ul className={`text-xl cursor-pointer ${currentUrl == '' ? 'text-amber-400' : 'text-white'} hover:text-amber-40`} onClick={()=>{navigate('/')}}>
                    Dashboard
                </ul>
                <ul className={`text-xl cursor-pointer ${currentUrl == 'add' ? 'text-amber-400' : 'text-white'} text-white hover:text-amber-400`} onClick={()=>{navigate('/add')}}>
                    Add Movie
                </ul>
            </div>
        </div>
    </>
  )
}

export default NavBar