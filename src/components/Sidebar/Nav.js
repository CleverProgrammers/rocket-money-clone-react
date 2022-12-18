import React from 'react'
import './Nav.css'
import { CiGrid42 } from 'react-icons/ci'
import { BsCalendarEvent } from 'react-icons/bs'
import { FaRegMoneyBillAlt } from 'react-icons/fa'
import { VscGraphLine } from 'react-icons/vsc'
import { AiOutlineSearch } from 'react-icons/ai'
const Nav = () => {
  return (
    <div className='navWrapper'>
      <div className='activeNavItem'>
        <CiGrid42 className='navIcon' />
        <span className='navText'>Dashboard</span>
      </div>
      <div className='navItem'>
        <BsCalendarEvent className='navIcon' />
        <span className='navText'>Recurring</span>
      </div>
      <div className='navItem'>
        <FaRegMoneyBillAlt className='navIcon' />
        <span className='navText'>Spending</span>
      </div>
      <div className='navItem'>
        <VscGraphLine className='navIcon' />
        <span className='navText'>Net Worth</span>
      </div>
      <div className='navItem'>
        <AiOutlineSearch className='navIcon' />
        <span className='navText'>Transactions</span>
      </div>
    </div>
  )
}

export default Nav
