import React from 'react'

export default function Nav() {
  return (
    <nav className='w-full h-fit flex md:flex-row flex-col justify-between items-center px-10 my-4 md:my-7 gap-4'>
        <div className='h-full flex justify-center items-center'>
          <h2 className='text-white font-title text-6xl'>F2Random</h2>
        </div>
        <div className='w-40 h-full flex flex-col justify-center items-center'>
          <h2 className='text-white font-body text-sm'>Want More?</h2>
          <a href='/' className='text-white font-bold py-2 px-4 rounded-2xl bg-blue-600 active:bg-blue-800 font-body text-lg'>SHUFFLE</a>
        </div>
    </nav>
  )
}
