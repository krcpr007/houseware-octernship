import { useState } from 'react'
import './App.css';
import {  Route, Routes } from 'react-router-dom'
import Screen1 from './Pages/Screen1';
import Screen2 from './Pages/Screen2';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  const [inputString, setInputString] = useState('')
  return (
    <>

      <Routes>
        <Route path='/' element={<Screen1 inputString={inputString} setInputString={setInputString} />} />
        <Route path='/screen2' element={<Screen2  inputString={inputString}/>} />
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
