import React from 'react'
import './Nav.css'
import { CiGrid42 } from 'react-icons/ci'
import { BsCalendarEvent } from 'react-icons/bs'
import { FaRegMoneyBillAlt } from 'react-icons/fa'
import { VscGraphLine } from 'react-icons/vsc'
import { AiOutlineSearch } from 'react-icons/ai'

// Importing the icons from react-icons library to be used in the Nav component

const Nav = () => {
  return (
    // Wrapper for the navigation bar
    <div className='navWrapper'>
      {/* First navigation item, active by default */}
      <div className='activeNavItem'>
        {/* Dashboard icon */}
        <CiGrid42 className='navIcon' />
        {/* Dashboard text */}
        <span className='navText'>Dashboard</span>
      </div>
      {/* Second navigation item */}
      <div className='navItem'>
        {/* Recurring icon */}
        <BsCalendarEvent className='navIcon' />
        {/* Recurring text */}
        <span className='navText'>Recurring</span>
      </div>
      {/* Third navigation item */}
      <div className='navItem'>
        {/* Spending icon */}
        <FaRegMoneyBillAlt className='navIcon' />
        {/* Spending text */}
        <span className='navText'>Spending</span>
      </div>
      {/* Fourth navigation item */}
      <div className='navItem'>
        {/* Net Worth icon */}
        <VscGraphLine className='navIcon' />
        {/* Net Worth text */}
        <span className='navText'>Net Worth</span>
      </div>
      {/* Fifth navigation item */}
      <div className='navItem'>
        {/* Transactions icon */}
        <AiOutlineSearch className='navIcon' />
        {/* Transactions text */}
        <span className='navText'>Transactions</span>
      </div>
    </div>
  )
}

// Exporting the Nav component
export default Nav
