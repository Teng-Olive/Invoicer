import React from 'react'

export default function Dates({invoiceNumber, invoiveDate, dueDate}) {
  return (
    <>
    <article className='mt-10 mb-20 flex items-end justify-end'>
    <ul>
       <li className='p-1'><span className='font-bold'>Invoice number:</span>{invoiceNumber}</li>
       <li className='p-1 bg-slate-100'><span className='font-bold'>invoice date:</span>{invoiveDate}</li>
       <li className='p-1'><span className='font-bold'>Due Date:</span>{dueDate}</li>
     </ul>

    </article>
      
    </>
  )
}
