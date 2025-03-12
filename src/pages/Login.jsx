import React from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    let navigate = useNavigate()
  return (
    <div className='flex justify-center flex-col items-center h-[30vh]'>
        <h1 className='text-violet-800 max-w-[300px] text-center  m-auto leading-6 text-lg'>You all are a precious blessing in my life, filling my days with joy, love, and gratitude.</h1>
        <button onClick={()=>{navigate('/home')}} className='text-white text-sm rounded-full px-6 py-2 sm:px-8 sm:py-3 bg-violet-500 hover:bg-violet-500/90'>click here</button>
    </div>
  )
}

export default Login