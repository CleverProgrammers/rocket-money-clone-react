import { useState } from 'react'
import ExpenseForm from './ExpenseForm'
import './Main.css'
import RecentTransactions from './RecentTransactions'

const Main = () => {
  const [transactions, setTransactions] = useState([])
  return (
    <div className='mainWrapper'>
      <div className='mainHeader'>Good morning, Kevin ☀️</div>

      <ExpenseForm
        transactions={transactions}
        setTransactions={setTransactions}
      />

      <div className='transactions'>
        <div className='transactionsHeader'>Recent Transactions</div>
        <RecentTransactions transactions={transactions} />
      </div>
    </div>
  )
}

export default Main
