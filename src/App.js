import React, { useState, useRef} from 'react';
import Footer from './components/Footer';
import Notes from './components/Notes';
import Table from './components/Table';
import InvoiceH from './components/InvoiceH';
import Client from './components/Client';
import Dates from './components/Dates';
import Main from './components/Main';
import './index.css';
import TableForm from './components/TableForm';
import ReactToPrint from 'react-to-print';

const App = () => {
  const [showInvoice, setShowInvoice] = useState(false);//if u set to usestate to false, u also need to set the default usestate  value to an empty string e.g useState("")
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [clientName, setClientName] = useState("");
  const [clientAddress, setClientAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [bankName, setBankName] = useState("");
  const [accountHolder, setAccountHolder] = useState("");
  const [bankAccountNumber, setBankAccountNumber] = useState("");
  const [invoiceDate, setInvoiceDate] = useState("");
  const [website, setWebsite] = useState("");
  const [invoiceNumber, setInvoiceNumber] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [notes, setNotes] = useState("");
  const [description, setDescription] = useState("");
  const [reference, setReference] = useState("");
  const [quantity, setQuantity] = useState("");
  const [unitPrice, setUnitPrice] = useState("");
  const [amount, setAmount] = useState("");
  const [list, setList] = useState([]);
  const [total, setTotal] = useState(0);

  const componentRef = useRef()

  return (
    <section className="bg-slate-400 w-full p-6">
    <main className='p-5 mt-4 xs:w-full xs:bg-red-200 sm:w-full sm:m-5 lg:w-8/12  bg-white shadow-xl rounded ml-11'>
     
    {showInvoice ? (
      <div>
      <ReactToPrint 
      trigger={() => <button className="bg-purple-500 text-purple font-bold py-2  ml-5 px-8 rounded shadow border-2 border-purple-500 hover:bg-transparent hover:text-purple-600 transition-all duration-500">Print/Download</button>}
      content={() => componentRef.current}
      />
      <div ref={componentRef} className="p-5">
      <InvoiceH />
      <Main name={name} address={address} email={email}/>
      <Client  clientName={clientName} clientAddress={clientAddress}/>
      <Dates invoiceNumber={invoiceNumber} invoiveDate={invoiceDate} dueDate={dueDate}/>
      <Table 
      description={description}
      reference={reference}
      quantity={quantity}
      unitPrice={unitPrice}
      amount={amount}
      list={list}
      setList={setList}
      total={total}
      setTotal={setTotal}

      />
      <Notes notes={notes}/>
      <Footer 
       className="footer border-t-2 border-gray-300 pt-5"
       name={name} 
       address={address}
       website={website} 
       email={email} 
       phoneNumber={phoneNumber} 
       bankAccountNumber={bankAccountNumber} 
       bankName={bankName}
       accountHolderccountHolder={accountHolder}
       />
       </div>
      
      <button onClick={() => setShowInvoice(false)} className="bg-purple-500 text-white font-bold py-2 mt-6 px-8 rounded shadow border-2 border-purple-500 hover:bg-transparent hover:text-purple-600 transition-all duration-500">Edit invoice info</button>
    </div>
      
      ) : (
        <>
          {/** Requirements that need states: name, address, client name, client address, 
           * phone number, bank account number, invoice date, website, email, invoice number, 
           * due date, and notes */}
          <div className="flex flex-col justify-center">
            <article className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 gap-4'>
              <div className='flex flex-col'>
              <label htmlFor="name">Enter your name</label>
              <input 
                type='text' 
                name='text' 
                id='name' 
                placeholder='Write your name here!' 
                autoComplete='off' 
                value={name} 
                onChange={(e) => setName(e.target.value)}
              />
              </div>
            <div className='flex flex-col'>
            <label htmlFor="address">Enter your address</label>
            <input 
              type='text' 
              name='address' 
              id='address' 
              placeholder='Write your address here!' 
              autoComplete='off' 
              value={address} 
              onChange={(e) => setAddress(e.target.value)}
            />
            </div>
            </article>

           <article className='grid grid-cols-3 sm:grid-cols-2 gap-10'>
          <div className='flex flex-col'>
          <label htmlFor="email">Enter your email</label>
          <input 
            type='email' 
            name='email' 
            id='email' 
            placeholder='Write your email here!' 
            autoComplete='off' 
            value={email} 
            onChange={(e) => setEmail(e.target.value)}
          />
          </div>

          <div className='flex flex-col'>
          
          <label htmlFor="website">Enter your Website</label>
          <input 
            type='url' 
            name='website' 
            id='website' 
            placeholder='Write your Address here!' 
            autoComplete='off' 
            value={website} 
            onChange={(e) => setWebsite(e.target.value)}
          />
          </div>

           <div className='flex flex-col'>
           <label htmlFor="phone">Enter your number</label>
           <input 
             type='text' 
             name='phone' 
             id='phone' 
             placeholder='Write your phone number here!' 
             autoComplete='off' 
             value={phoneNumber} 
             onChange={(e) => setPhoneNumber(e.target.value)}
           />
           </div>
           
           </article>

          <article className='grid grid-cols-2 gap-10'>
          <div className='flex flex-col'>
          <label htmlFor="bankAccountNumber">Enter your bank Account number</label>
          <input 
            type='text' 
            name='bankAccountNumber' 
            id='bankAccountNumber' 
            placeholder='Write your bankAccountNumber  here!' 
            autoComplete='off' 
            value={bankAccountNumber} 
            onChange={(e) => setBankAccountNumber(e.target.value)}
          />
          </div>

          <div className='flex flex-col'>
          <label htmlFor="bankName">Enter your Bank name</label>
          <input 
            type='name' 
            name='bankName' 
            id='bankName' 
            placeholder='Write your bankName  here!' 
            autoComplete='off' 
            value={bankName} 
            onChange={(e) => setBankName(e.target.value)}
          />
          </div>
          </article>

            <article className='grid grid-cols-2 gap-10 mt-10'>
            <div className='flex flex-col'>
            <label htmlFor="clientName">Enter client's name</label>
            <input 
              type='text' 
              name='clientName' 
              id='clientName' 
              placeholder='Write your clientName here!' 
              autoComplete='off' 
              value={clientName} 
              onChange={(e) => setClientName(e.target.value)}
            />
            </div>

             <div className='flex flex-col'>
             <label htmlFor="clientAddress">Enter Client's Address</label>
             <input 
               type='text' 
               name='clientAddress' 
               id='clientAddress' 
               placeholder='Write your clientAddress here!' 
               autoComplete='off' 
               value={clientAddress} 
               onChange={(e) => setClientAddress(e.target.value)}
             />
             </div>

            </article>
             
            <article className='grid grid-cols-3 sm:grid-cols-2 gap-10'>
            <div className='flex flex-col'>
           <label htmlFor="invoiceNumber">Enter invoice Number</label>
           <input 
             type='number' 
             name='invoiceNumber' 
             id='invoiceNumber' 
             placeholder='Write your invoiceNumber here!' 
             autoComplete='off' 
             value={invoiceNumber} 
             onChange={(e) => setInvoiceNumber(e.target.value)}
           />
           </div>

            <div className='flex flex-col'>
            <label htmlFor="invoiceDate">Enter the invoice date</label>
            <input 
              type='date' 
              name='invoiceDate' 
              id='invoiceDate' 
              placeholder='Write your invoiceDate here!' 
              autoComplete='off' 
              value={invoiceDate} 
              onChange={(e) => setInvoiceDate(e.target.value)}
            />
            </div>

           
           <div className='flex flex-col'>
           <label htmlFor="dueDate">Enter the duedate</label>
           <input 
             type='date' 
             name='dueDate' 
             id='dueDate' 
             placeholder='Write your dueDate here!' 
             autoComplete='off' 
             value={dueDate} 
             onChange={(e) => setDueDate(e.target.value)}
           />
           </div>

            </article>
            <label htmlFor="accountHolder">AccountHolder's Name</label>
            <input 
              type='text' 
              name='accountHolder' 
              id='accountHolder' 
              placeholder='Write your accountHolder here!' 
              autoComplete='off' 
              value={accountHolder} 
              onChange={(e) => setAccountHolder(e.target.value)}
            />

            {/** this is our table form */}
            <article>
            <TableForm 
               description={description}
               setDescription={setDescription}
               reference={reference}
               setReference={setReference}
               quantity={quantity}
               setQuantity={setQuantity}
               unitPrice={unitPrice}
               setUnitPrice={setUnitPrice}
               amount={amount}
               setAmount={setAmount}
               list={list}
               setList={setList}
               total={total}
               setTotal={setTotal}
            />
            </article>



            <label htmlFor="notes">Additional information</label>
            <textarea 
              name='notes' 
              id='notes' 
              cols="30"
              rows='10'
              placeholder='Write your notes here!' 
              autoComplete='off' 
              value={notes} 
              onChange={(e) => setNotes(e.target.value)}
            >
            </textarea>

           


            
            <button onClick={() => setShowInvoice(true)} className="bg-purple-500 text-white font-bold py-2 mt-4 px-8 rounded shadow border-2 border-purple-500 hover:bg-transparent hover:text-purple-600 transition-all duration-500">Preview invoice</button>
          </div>
        </>
      )}
    </main>
    </section>
  );
};

export default App;