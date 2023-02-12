// File: Profile.js

import React from 'react'
import './Profile.css'
import { AiOutlineBell } from 'react-icons/ai'
import { RxGear } from 'react-icons/rx'

const Profile = () => {
  // Render the profile component
  return (
    <div className='profileWrapper'>
      {/* Left section of the profile component */}
      <div className='left'>
        {/* Greeting message */}
        <div className='greetings'>Hi, Kevin</div>
        {/* Member type */}
        <div className='memberType'>Premium Member</div>
      </div>
      {/* Right section of the profile component */}
      <div className='right'>
        {/* Notification icon */}
        <AiOutlineBell className='notifIcon' />
        {/* Settings icon */}
        <RxGear className='settingsIcon' />
      </div>
    </div>
  )
}

export default Profile
