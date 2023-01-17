import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../assets/logo.png'

const Footer = () => {
  return (
    <div className='w-full mt-56 items-center border-t text-white'>
      <div className=' object-fill flex lg:px-20 items-center justify-between'>
        <div className='flex items-center'>
        <img className='h-20  lg:h-40 w-20 lg:w-40' src={logo} alt='logo' />
        <p className='mt-3'>Organization</p>
        </div>
        <div className='flex w-44 lg:w-56 justify-evenly'>
            <NavLink to={'/'}>Home</NavLink>
            <NavLink to={'/overview'}>History</NavLink>
            <NavLink to={'/about'}>About</NavLink>
        </div>
      </div>
        <p className='text-center py-8'>&copy; RODLIP ORG 2023</p>
    </div>
  )
}

export default Footer