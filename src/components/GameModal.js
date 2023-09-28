import React from 'react'

export default function GameModal({open, setOpen, data}) {

  return (
    <div className='w-full h-screen bg-black fixed flex justify-center items-center bg-opacity-50 top-0'>
        <div className='w-[550px] h-fit bg-white/10 backdrop-blur-md z-30 rounded-3xl border-2 border-white/10 flex flex-col justify-start items-center overflow-hidden relative'>
          <img src={data?.thumbnail} alt='thumbnail' width='auto' height='auto' className='w-full h-[320px]'/>
          <div className='w-full h-full gap-4 flex flex-col justify-start items-center p-6'>
            <h2 className='text-white font-bold text-2xl font-body'>{data?.title}</h2>
            <p className='text-white text-base font-body text-justify'>{data?.short_description}</p>
            <div className='w-full h-full gap-2 flex justify-center items-start'>
              <div className='w-full h-full gap-2 flex flex-col justify-start items-center'>
                <p className='text-white font-normal text-sm font-body'>Publisher</p>
                <p className='text-white font-bold text-xl font-body text-center'>{data?.publisher}</p>
                <p className='text-white font-normal text-sm font-body'>Genre</p>
                <p className='text-white font-bold text-xl font-body'>{data?.genre}</p>
              </div>
              <div className='w-full h-full gap-2 flex flex-col justify-start items-center'>
                <p className='text-white font-normal text-sm font-body'>Release Date</p>
                <p className='text-white font-bold text-xl font-body'>{data?.release_date}</p>
                <p className='text-white font-normal text-sm font-body'>Platform</p>
                <p className='text-white font-bold text-xl font-body'>{data?.platform}</p>
              </div>
            </div>
            <a href={data?.game_url} target='_blank' className='w-52 text-white font-bold text-xl font-body p-4 drop-shadow-md bg-blue-600 flex justify-center rounded-lg active:bg-blue-800'>Try this game</a>
            <div onClick={() => {setOpen(!open)}} className='w-10 h-10 text-white font-bold text-xl font-body cursor-pointer bg-blue-600 flex drop-shadow-md justify-center items-center rounded-2xl active:bg-blue-800 absolute top-5 right-5'>X</div>
          </div>
        </div>
    </div>
  )
}
