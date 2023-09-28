"use client"
import React, { useEffect } from 'react'
import GameModal from './GameModal'


export default function Gamecard({data}) {

  const [open, setOpen] = React.useState(false);
  const [selectedGame, setSelectedGame] = React.useState(null);
  useEffect(() => {
    if(open) {
      document.body.style.overflow = 'hidden';
    }
    else {
      document.body.style.overflow = 'auto';
    }
  },[open])

  return (
    <div className='w-full h-full flex flex-wrap justify-evenly gap-4 p-10 pt-0'>
    {data.slice(0,30).map((game, index) => {
        return (
          <div key={index} className='w-fit h-full flex flex-col justify-center items-center group relative cursor-pointer' onClick={() => {setSelectedGame(index); setOpen(!open)}}>
            <img src={game?.thumbnail} alt='thumbnail' width='350px' height='250px' className='group-hover:opacity-50 transition-all duration-300 ease-out'/>
            <h2 className='text-white opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out absolute'>{game?.title}</h2>
          </div>
        )}
    )}

    { open ?
      <GameModal open={open} setOpen={setOpen} data={data[selectedGame]}/>
    : null}

  </div>
  )
}
