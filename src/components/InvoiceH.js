import React from 'react'

export default function InvoiceH() {
  const handlePrint = () => {
    window.print()
  }
  return (
    <div>
    <header className='flex flex-col items-center justified-center mb-7 md:flex-row sm:justify-between '>
           <div>
           <h2 className='font-bold uppercase tracking-wide text-xl mb-4'>Invoicer</h2>
           </div>

           <div>
           {/**<ul className=' flex item-center justify-between flex-wrap bg-transparent'>
             <li className="mx-2"><button onClick={handlePrint} className="bg-gray-500 text-white font-bold py-2 px-8 rounded shadow border-2 border-purple-500 hover:bg-transparent hover:text-purple-600 transition-all duration-500">Print</button></li>
             <li className="mx-2"><button className="bg-white-500 text-purple font-bold py-2 px-8 rounded shadow border-2 border-purple-500 hover:bg-transparent hover:text-purple-600 transition-all duration-500">Download</button></li>
             <li className="mx-2"><button className="bg-purple-500 text-white font-bold py-2 px-8 rounded shadow border-2 border-purple-500 hover:bg-transparent hover:text-purple-600 transition-all duration-500">Send</button></li>
  </ul>*/}
           </div>
         
         </header>
      
    </div>
  )
}
