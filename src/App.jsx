import React from 'react';
import Login from './pages/login';
import Home from './pages/Home';
import Navbar from './components/navbar';
import { HashRouter, Route, Routes } from 'react-router-dom';
import bg from '../public/assets/photos/bg.jpg'; // ✅ Corrected import

const bgStyle = {
  backgroundImage: `url(${bg})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
};

const App = () => {
  return (
    <HashRouter>
      <div style={bgStyle} className='overflow-x-hidden'>
        <div className='min-h-screen bg-white/50'>
          <Navbar />
          <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/home' element={<Home />} />
          </Routes>
        </div>
      </div>
    </HashRouter>
  );
};

export default App;
