import React from 'react'

export default function Client({clientName, clientAddress}) {
  return (
    <>
    <section className='mt-10'>
    <h2 className='font-bold uppercase tracking-wide text-xl mb-4'>{clientName} </h2>
    <p>{clientAddress}</p>
   </section>

      
    </>
    
  )
}
