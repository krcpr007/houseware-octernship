import React from 'react'
import { TiDelete } from 'react-icons/ti'
function CharacterComp({ character, handleDeleteCharacter, index }) {
     
    //Function to generate bgColor by taking a input character
    const getBgColor = (char) =>{
    // taking bg color same for the alphabet either its uppercase or lowercase 
    const charCode = char.toLowerCase().charCodeAt(0);
    // Use the ASCII code to generate hex colorCode
    const colorCode = "#" + ((charCode * 123456) % 16777215).toString(16);
    return colorCode;
  }
    return (
        <>
        <div className='m-1 w-20 flex justify-center rounded' title={character===' '?'space':character} style={{backgroundColor:getBgColor(character)}}>
            <div>
            <button className='text-xl pt-1' title='Delete' onClick={() => handleDeleteCharacter(character, index)}><TiDelete className='bg-rose-100 rounded-full'/></button>
            <h1 className='text-white text-5xl font-mono pb-3'>{character}</h1>
            </div>
        </div>
    </>
  )
}

export default CharacterComp