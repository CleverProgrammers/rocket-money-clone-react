import React from 'react'
import './RecentTransactions.css'

/* Component for the recent transactions */
// ⭐ Pass the transactions as a prop
const RecentTransactions = () => {
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
          {/* ⭐ Map through the transactions and display each one */}
        </tbody>
      </table>
    </div>
  )
}

export default RecentTransactions
