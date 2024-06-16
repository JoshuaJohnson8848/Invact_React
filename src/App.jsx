import { useState } from 'react'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import './App.css'
import Home from './components/Home/Home';
import TopBar from './layouts/TopBar/TopBar';
import NavBar from './layouts/NavBar/NavBar';
import AddMovie from './components/AddMovie/AddMovie';
import MovieView from './components/MovieView/MovieView';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      <TopBar />
      <div className='grid grid-cols-12 bg-orange-50'>
        <div className='col-span-2'>
          <NavBar />
        </div>
        <div className='col-span-10 scroll-smooth h-screen overflow-y-auto'>
          <Routes>
            <Route  path='/' element={<Home/>}/>
            <Route  path='/add' element={<AddMovie/>}/>
            <Route  path='/view' element={<MovieView/>}/>
          </Routes>
        </div>
      </div>
      </BrowserRouter>
    </>
  )
}

export default App
