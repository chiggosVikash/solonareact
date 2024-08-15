"use client"

import React, { useState } from 'react'

const page = () => {
  const [publicAccount, setPublicAccount] = useState("")
  const [sol, setSol] = useState("")
  const [contentType, setContentType] = useState("")
  const submitHandler=(e)=>{
    e.preventDefault()
    setPublicAccount("")
    setSol("")
  }

  let renderContent = <h2>Select an option.</h2>
  
  if(contentType === "GetTest"){
    renderContent = (
      <div className='flex justify-center items-center'>
        <button className=' bg-blue-400 py-2 px-8 rounded-md font-semibold w-1/2'>Get 1 Test Sol</button>
      </div>
      );
  }
  else if(contentType === "TransferTest"){
    renderContent = (
      <form 
        onSubmit={submitHandler}>
          <div className='flex justify-between'>
            <input 
              value={publicAccount}
              onChange={(e)=>setPublicAccount(e.target.value)}
              className='w-[40%] border-2 border-blue-300 py-2 px-4 rounded mx-4' 
              placeholder='Enter Public Account'>
            </input>
            <input 
              value={sol}
              onChange={(e)=>setSol(e.target.value)}
              className='w-[40%] border-2 border-blue-300 py-2 px-4 rounded' 
              placeholder='Enter Sol'>
            </input>
          </div>
        <br/>
        <button className='mt-14 relative left-1/2 -translate-x-1/2 bg-blue-400 py-2 px-8 rounded-md font-semibold '>Transfer</button>
      </form>
    );
  }

  return (
    <>
      <div className='text-4xl bg-blue-400 p-4 font-bold'>MY SOLONA</div>
      <div className='flex m-10 justify-around items-center bg-neutral-800 p-5 rounded-md'>
        <h3>You have <strong className='text-2xl text-cyan-400'>10</strong> Test Sol !</h3>
        <button 
          onClick={()=>{
            setContentType("GetTest")
          }}
          className='bg-blue-400 py-2 px-4 rounded-md font-semibold'>Get Test Sol</button>
        <button 
          onClick={()=>{
            setContentType("TransferTest")
          }}
          className='bg-black transition hover:bg-cyan-400 border-cyan-200 border-[0.8px] py-2 px-4 rounded-md font-semibold'>Transfer Test Sol</button>
      </div>
      <div className='m-10 p-10 bg-neutral-900'>{renderContent}</div>

      
    </>
  )
}

export default page
