import React from 'react'

export default function Notes({notes}) {
  return (
    <div>
    
    <section>
    {/*Textarea*/}
     <p className='mb-10 mt-10 lg:w-1/2 border-b border-gray-700 p-7 text-justify'>{notes}</p>
    </section>
    
      
    </div>
  )
}
