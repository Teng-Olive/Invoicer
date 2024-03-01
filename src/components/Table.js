import React from 'react'

export default function Table({list, total}) {
  return (
    <>
     
     
    <table width="100%" className='mb-10'>
        <thead>
          <tr className="bg-gray-100">
            <td>Description</td>
            <td>Reference</td>
            <td>Quantity</td>
            <td>Unit price</td>
            <td>Amount</td>
          </tr>
        </thead>
        
          {list.map(({ id, description, reference, quantity, unitPrice, amount }) => (
            <React.Fragment key={id}>
            <tbody>
            <tr>
              <td className="md:w-3/12">{description}</td>
              <td>{reference}</td>
              <td>{quantity}</td>
              <td>{unitPrice}</td>
              <td className="amount">{amount}</td>
            </tr>
            </tbody>
            </React.Fragment>
          ))}
        
      </table>
      <div>
      <h2 className="flex item-flex justify-end text-gray-800 text-4xl font-bold">FCFA {total.toLocaleString()}</h2>
      </div>
             
     
      
    </>
  )
}
