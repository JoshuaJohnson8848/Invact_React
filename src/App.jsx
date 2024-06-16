import { useState } from 'react'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import './App.css'
import Home from './components/Home/Home';
import TopBar from './layouts/TopBar/TopBar';
import NavBar from './layouts/NavBar/NavBar';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      <TopBar />
      <div className='grid grid-cols-8'>
        <div className='col-span-2'>
          <NavBar />
        </div>
        <div className='col-span-6'>
          <Routes>
            <Route  path='/' element={<Home/>}/>
          </Routes>
        </div>
      </div>
      </BrowserRouter>
    </>
  )
}

export default App
