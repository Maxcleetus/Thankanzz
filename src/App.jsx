import React from 'react'
import Login from './pages/login'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/navbar'
import bg from '../src/assets/photos/bg.jpg'

const bgStyle = {
  backgroundImage:`url(${bg})`,
  backgroundRepeat:"no-repeat",
  backgroundSize:"cover",
  backgroundPosition:"center"

}

const App = () => {
  return (
    <div style={bgStyle} className='overflow-x-hidden' >
      <div className='min-h-screen bg-white/50'>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Login/>} />
          <Route path='/home' element={<Home/>} />
        </Routes>
      </div>
      
    </div>
  )
}

export default App