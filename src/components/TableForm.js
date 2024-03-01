import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { FaTrash, FaEdit } from 'react-icons/fa';


export default function TableForm({
  description,
  setDescription,
  reference,
  setReference,
  quantity,
  setQuantity,
  unitPrice,
  setUnitPrice,
  amount,
  setAmount,
  list,
  setList,
  total,
  setTotal
}) {

    const [isEditing, setIsEditing] = useState(false)

    //submit form funcion
  const handleSubmit = (e) => {
    e.preventDefault();

    //inorder to avoid adding empty items, use and if else statement
    if (!description || !reference || !quantity || !unitPrice) {
        alert('please fill in all the inputs')
    } else{ }

    const newItems = {
      id: uuidv4(),
      description,
      reference,
      quantity,
      unitPrice,
      amount,
    };


    setDescription('');
    setReference('');
    setQuantity('');
    setUnitPrice('');
    setAmount('');
    setList([...list, newItems]);
    setIsEditing(false);
    console.log(list);
  };
//calulate amount funtion
  useEffect(() => {
    const calculateAmount = () => {
      setAmount(quantity * unitPrice);
    };

    calculateAmount();
  }, [quantity, unitPrice, setAmount]);

  //calculate total amount of items in the table
 useEffect(() => {
    let rows = document.querySelectorAll(".amount")
    let sum = 0
  
  
  //**loop over all the rows  then get the total 
  for(let i = 0; i < rows.length; i++) {
      if (rows[i].className === "amount") {
          sum += isNaN(rows[i].innerHTML) ? 0 :parseInt(rows[i].innerHTML)
  setTotal(sum)    
   }
  }
  
  
 })
//edit button function
const editRow = (id) => { 
const editingRow = list.find((row) => row.id === id)
      setList(list.filter((row) => row.id !== id))
setIsEditing(true)
setDescription(editingRow.description)
setReference(editingRow.reference)
setQuantity(editingRow.quantity)
setUnitPrice(editingRow.unitPrice)
setAmount(editingRow.amount)
}


//delete button function
const deleteRow = (id) => {
    setList(list.filter((row) => row.id !== id))
} 
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col mt-10">
          <label htmlFor="description bg-yellow-700">Item description</label>
          <input
            type="text"
            name="description"
            id="description"
            placeholder="item description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <div className="grid grid-cols-4 gap-10">
          <div className="flex flex-col">
            <label htmlFor="reference">Item reference</label>
            <input
              type="text"
              name="reference"
              id="reference"
              placeholder="item reference"
              value={reference}
              onChange={(e) => setReference(e.target.value)}
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="quantity">Item quantity</label>
            <input
              type="text"
              name="quantity"
              id="quantity"
              placeholder="item quantity"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="unitPrice">Item unitPrice</label>
            <input
              type="text"
              name="unitPrice"
              id="unitPrice"
              placeholder="item unitPrice"
              value={unitPrice}
              onChange={(e) => setUnitPrice(e.target.value)}
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="amount">Item amount</label>
            <p>{amount}</p>
          </div>
        </div>
        <button
          type="submit"
          className="bg-purple-500 text-white font-bold py-2 px-8 mt-5 mb-5 rounded shadow border-2 border-purple-500 hover:bg-transparent hover:text-purple-600 transition-all duration-500"
        >
          {/**add a condition here so that when the edit icon is click , thhe add table items should indicate editing */}
          {isEditing ? "Editing Row Item" : "Add Table item"}
        </button>
      </form>
      {/**add table items */}
    
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
              <td><button onClick={() => deleteRow(id)}><FaTrash className="text-red-500 font-bold texl-xl"/></button></td>
              <td><button onClick={() => editRow(id)}><FaEdit className="text-green-500 font-bold text-xl"/></button></td>
              </tr>
            </tbody>
            </React.Fragment>
          ))}
        
      </table>
      <div>
      <h2 className="flex item-flex justify-end text-gray-800 text-4xl font-bold">FCFA{total.toLocaleString()}</h2>
      </div>
    </>
  )
}