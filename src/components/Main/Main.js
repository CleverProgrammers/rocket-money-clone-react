import React from 'react'
import ExpenseForm from './ExpenseForm'
import './Main.css'
import RecentTransactions from './RecentTransactions'

const Main = () => {
  return (
    <div className='mainWrapper'>
      <div className='mainHeader'>Good morning, Kevin ☀️</div>
      <ExpenseForm />
      <div className='transactions'>
        <div className='transactionsHeader'>Recent Transactions</div>
        <RecentTransactions />
      </div>
    </div>
  )
}

export default Main
