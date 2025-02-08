import React from 'react'
import logo from '../src/assets/react.svg'
import sidebar from './sidebar'

const Navbar = () => {
  return (
    <>
      
      <nav className='bg-blue-700 w-full fixed top-0 z-50 left-0 flex flex-row justify-between items-center'> 
        <div className=' mx-auto p-2'>
            <div className='flex items-center'>
                <img src="../src/assets/react.svg"
                alt="logo" 
                className='logo' />
                <h1 className='text-2xl font-bold text-white'>Admin Dashboard</h1>

            </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar