import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../assets/logo.png'




const Header = () => {
  return (
    <div className='bg-black items-center text-white'>
    <div className='bg-black object-fill flex lg:px-20 items-center text-white'>
      <NavLink to={'/'}>
      <img className='h-20  lg:h-40 w-20 lg:w-40' src={logo} alt='logo' />
      </NavLink>
      <p className='mt-2 lg:mt-0 lg:-mt-1 lg:text-2xl'>Organization</p>
    </div>
    </div>
  )
}

export default Header