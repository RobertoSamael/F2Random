
import React from 'react'
import Nav from '@/components/Nav'
import Gamecard from '@/components/Gamecard'
import getData from '@/api/getData'

export default async function Homepage() {
  const data = await getData()

  return (
    <section className='w-full h-full flex flex-col justify-center items-center bg-blue-950 relative'>
      <Nav/>
      <Gamecard data={data}/>
    </section>
  )
}
