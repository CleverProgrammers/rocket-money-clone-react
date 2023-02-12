import React from 'react'
import './RecentTransactions.css'

/* Component for the recent transactions */
const RecentTransactions = ({ transactions }) => {
  /* Log the transactions to the console */
  console.log(transactions)

  return (
    /* Container for the recent transactions */
    <div className='recentTransactions'>
      {/* Table for the recent transactions */}
      <table>
        {/* Table head for the description, category, and amount */}
        <thead>
          <tr>
            <td>Description</td>
            <td>Category</td>
            <td>Amount</td>
          </tr>
        </thead>
        {/* Table body for the transaction data */}
        <tbody>
          {/* Map through the transactions and display each one */}
          {transactions.map((tx, index) => (
            <tr key={index}>
              <td>{tx.name}</td>
              <td>{tx.category}</td>
              <td>${tx.cost.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default RecentTransactions
