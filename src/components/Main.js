import React from 'react'

export default function Main({name, address}) {
  return (
    <>
    <section className='flex flex-col items-end justify-end'>
          
          <h2 className='font-bold uppercase tracking-wide text-xl mb-4'>{name}</h2>
          <p>{address}</p>

         </section>


    </>
  )
}
