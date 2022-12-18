import React from 'react'
import './Profile.css'
import { AiOutlineBell } from 'react-icons/ai'
import { RxGear } from 'react-icons/rx'

const Profile = () => {
  return (
    <div className='profielWrapper'>
      <div className='left'>
        <div className='greetings'>Hi, Kevin</div>
        <div className='memberType'>Premium Memeber</div>
      </div>
      <div className='right'>
        <AiOutlineBell className='notifIcon' />
        <RxGear className='settingsIcon' />
      </div>
    </div>
  )
}

export default Profile
