import React, { useState } from 'react'
import ExpenseForm from './ExpenseForm'
import './Main.css'
import RecentTransactions from './RecentTransactions'

/* Component for the main screen */
const Main = () => {
  /* ⭐ Make a State variable to store the transactions */

  return (
    /* Main container */
    <div className='mainWrapper'>
      {/* Header for the main screen */}
      {/* ⭐ Change the name to your name */}
      <div className='mainHeader'>Good morning, Kevin ☀️</div>
      {/* Expense form component */}
      {/* ⭐ Pass the transactions and setTransactions as props */}
      <ExpenseForm />
      {/* Container for the recent transactions */}
      <div className='transactions'>
        {/* ⭐ Check if there are any transactions and render RecentTransactions Component if they exist
        and 'No Transactions Yet' if they dont exist */}
      </div>
    </div>
  )
}

export default Main
