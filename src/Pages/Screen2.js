import React, { useState ,useEffect} from 'react'
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import CharacterComp from '../Components/CharacterComp'

function Screen2({ inputString }) {
  const [result, setResult] = useState(inputString) // for displaying the result
  const[unique,setUnique] = useState(false) //for checking the string contain unique characters 

  // Returns true if the input string s does not contain any duplicate characters.
  function hasUniqueChars(s) {
    let seen = new Set();
    for (let i = 0; i < s.length; i++) {
      let c = s.charAt(i);
      if (seen.has(c)) {
        return false;
      }
      seen.add(c);
    }
    return true;
  }

  useEffect(()=>{
    if(hasUniqueChars(result)){
    //here set true it has unique character 
    setUnique(true);
    }
  },[result])

  //function to delete character 
  const handleDeleteCharacter = (char, index) => {
    try {
      let newResult = "";
      for (let i = 0; i < result.length; i++) {
        if (i === index || result.charAt(i) !== char) {
          newResult += result.charAt(i);
        }
      }
      if(newResult!==result){
        toast.success(`Successfully removed '${char}'`)
      }else{
        toast.info(`No duplicate of '${char}' found`)
      }
      setResult(newResult)
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
        {unique && <>
        <div className='bg-green-400'>
            <p className=' px-3 lg:px-5 py-5 text-xl text-black'>Success! There are no Duplicate characters in the string.</p>
        </div>
        </>}
        <div className='px-3 lg:px-5 bg-rose-100 py-5 text-2xl'>
         <p>Original String: <span className='text-red-400'>{inputString}</span></p>
         <p>Resultant string: <span className='text-green-500'>{result}</span></p>
        </div>
        <div className='px-3 lg:px-5 flex flex-wrap '>
          {[...result]?.map((char, i) => {
            return <CharacterComp character={char} key={i} index={i} handleDeleteCharacter={handleDeleteCharacter} />
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