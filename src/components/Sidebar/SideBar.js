/* This component renders the sidebar of the application */

import React from 'react'
import './SideBar.css'
import logo from '../../assets/logo.png' // import the logo image
import Profile from './Profile' // import the Profile component
import Nav from './Nav' // import the Nav component

const SideBar = () => {
  return (
    <div className='wrapper'>
      {/* Logo container */}
      <div className='logoContainer'>
        <img src={logo} alt='logo' className='logo' />
      </div>

      {/* Profile component */}
      <Profile />

      {/* Navigation component */}
      <Nav />
    </div>
  )
}

export default SideBar
