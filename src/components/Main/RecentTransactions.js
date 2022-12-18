import React from 'react'
import './RecentTransactions.css'

const RecentTransactions = () => {
  return (
    <table>
      <tr>
        <th>Description</th>
        <th>Category</th>
        <th>Amount</th>
      </tr>
      <tr>
        <td>Grocery Shopping</td>
        <td>🍲Food</td>
        <td>$50.00</td>
      </tr>
      <tr>
        <td>Gas for car</td>
        <td>🚗Transportation</td>
        <td>$30.00</td>
      </tr>
      <tr>
        <td>Dinner at restaurant</td>
        <td>🍲Food</td>
        <td>$75.00</td>
      </tr>
    </table>
  )
}

export default RecentTransactions
