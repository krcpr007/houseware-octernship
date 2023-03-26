import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
function Screen1({ setInputString }) {
  const navigate = useNavigate()
  const [text, setText] = useState('')
  const handleSubmit = () => {
    if (text.length === 0) {
      toast.error("Enter Something")
    }
    else if(!text.replace(/\s/g, '').length){
      toast.error("Only contains spaces")
      setText('')
    }
    else {
      setInputString(text)
      navigate('/screen2')
    }
  }
  return (
    <>
      <section className='bg-rose-200 h-screen'>
        <div className='m-auto py-20'>
         <div className='text-center'>
          <h1 className='text-3xl font-medium text-rose-800'>Welcome❤️‍🔥</h1>
          <span className='text-xs'>Made By <a href="https://krcpr007.vercel.app" className='underline text-blue-400' rel="noreferrer" target="_blank">Rajan Kumar</a> </span>
         </div>
          <div className='container px-2'>
            <p className='text-rose-800 font-medium text-xl'>Enter the text</p>
            <textarea name="" id="" className='w-full' value={text} onChange={e => setText(e.target.value)} rows="10" placeholder='Enter the string...'/><br />
           <div className='flex justify-center p-2'>
              <button className='bg-rose-900 text-white p-2 font-medium rounded shadow-md hover:shadow-2xl' onClick={handleSubmit}>Submit</button>
           </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Screen1