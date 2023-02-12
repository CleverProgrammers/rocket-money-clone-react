import React, { useState } from 'react'
import ExpenseForm from './ExpenseForm'
import './Main.css'
import RecentTransactions from './RecentTransactions'

/* Component for the main screen */
const Main = () => {
  /* State variable to store the transactions */
  const [transactions, setTransactions] = useState([])

  return (
    /* Main container */
    <div className='mainWrapper'>
      {/* Header for the main screen */}
      <div className='mainHeader'>Good morning, Kevin ☀️</div>
      {/* Expense form component */}
      <ExpenseForm
        transactions={transactions}
        setTransactions={setTransactions}
      />
      {/* Container for the recent transactions */}
      <div className='transactions'>
        {/* Check if there are any transactions */}
        {transactions.length ? (
          <>
            {/* Header for the recent transactions */}
            <div className='transactionsHeader'>Recent Transactions</div>
            {/* Component for the recent transactions */}
            <RecentTransactions transactions={transactions} />
          </>
        ) : (
          /* Message if there are no transactions */
          <div className='noTransactions'>No transactions yet</div>
        )}
      </div>
    </div>
  )
}

export default Main
