import React from 'react'

export default function Footer({name, address, email, website, phoneNumber,  bankName, bankAccountNumber, accountHolder}) {
  return (   
    <>
     {/**footer */}
     <ul className='flex flex-wrap items-center justify-center '>
     <li><strong>Your Name:</strong> {name} </li>
     <li><strong>Your Email:</strong>{email}</li>
     <li><strong>Your Address:</strong>{address}</li>
     <li><strong>Phone Number:</strong>{phoneNumber}</li>
     <li><strong>Bank:</strong>{bankName}</li>
     <li><strong>Account holder name:</strong>{accountHolder}</li>
     <li><strong>Bank account no:</strong>{bankAccountNumber}</li>
     <li><strong>Website:</strong>{""}
       <a href={website} target="_black" rel="noopenner noreferrer">{website}</a>
     </li>
    </ul>

    {/**end of footer */}
      
    </>
  )
}

