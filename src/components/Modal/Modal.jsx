import React from 'react'

function Modal({ title, isOpen, onClose, onSubmit }) {
  return (
    <>
        { isOpen && (<div className='backdrop-blur-sm fixed inset-0 flex flex-row justify-center items-center h-screen w-full overflow-y-auto'>
            <div className='flex flex-col w-[650px] h-[200px] border rounded-xl bg-slate-200 border-slate-400 justify-center items-center'> 
                <div className='py-4 px-2'>
                    <h1 className='text-2xl text-left'>Confirm Action</h1>
                </div>
                <div className='px-2'>
                    <h4 className='text-md text-left'>Did you want to {title} the movie ?</h4>
                </div>
                <div className='flex flex-row py-4 px-4 justify-end items-end gap-4'>
                    <button className='bg-red-600 p-2 border rounded-md w-12 text-white' onClick={onClose}>No</button>
                    <button className='bg-green-600 p-2 border rounded-md w-12 text-white' onClick={onSubmit}>Yes</button>
                </div>
            </div>
        </div>
        )}
    </>
  )
}

export default Modal