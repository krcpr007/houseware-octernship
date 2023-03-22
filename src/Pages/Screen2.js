import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import CharacterComp from '../Components/CharacterComp'

function Screen2({ inputString }) {
  const [result, setResult] = useState('')
  const handleDeleteCharacter = (char, index) => {
    try {
      let result = "";
      for (let i = 0; i < inputString.length; i++) {
        if (i === index || inputString.charAt(i) !== char) {
          result += inputString.charAt(i);
        }
      }
      setResult(result)
      toast.success(`Successfully removed '${char}'`)
    } catch (error) {
      console.log(error)
    }
  }
  if (inputString.length === 0 || inputString === undefined) {
    return (<div className='bg-red-100 flex justify-center items-center h-screen'>
      <div>
        <h1 className='text-xl md:text-2xl px-5 md:px-0'>Something went wrong!! Please click on go back...</h1>
        <div className='flex justify-center p-2'>
          <Link to="/"><button className='bg-rose-900 text-white p-2 font-medium rounded shadow-md hover:shadow-2xl'>GO Back</button></Link>
        </div>
      </div>
    </div>)
  }
  return (
    <>
      <section>
        <div className='px-3 lg:px-5 flex flex-wrap '>
          {[...inputString]?.map((char, i) => {
            return <CharacterComp character={char} key={i} index={i} handleDeleteCharacter={handleDeleteCharacter} />
          })}
        </div>
        <div>
          <h1 className='text-lg md:text-2xl text-center '>New Resultant String will show below</h1>
        </div>
        <div className='flex flex-wrap px-3 lg:px-5'>
          {[...result]?.map((char, i) => {
            return <div key={i} className="bg-green-500 m-1 w-20 flex justify-center rounded"> <h1 className='text-white text-5xl font-mono pb-2'>{char}</h1></div>
          })}
        </div>
        <div className='flex justify-center p-2'>
          <Link to="/"><button className='bg-rose-900 text-white p-2 font-medium rounded shadow-md hover:shadow-2xl'>GO Back</button></Link>
        </div>
      </section>
    </>
  )
}

export default Screen2