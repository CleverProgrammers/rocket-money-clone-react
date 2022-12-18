import React from 'react'
import './SideBar.css'
import logo from '../../assets/logo.png'
import Profile from './Profile'
import Nav from './Nav'

const SideBar = () => {
  return (
    <div className='wrapper'>
      <div className='logoContainer'>
        <img src={logo} alt='logo' className='logo' />
      </div>
      <Profile />
      <Nav />
    </div>
  )
}

export default SideBar
