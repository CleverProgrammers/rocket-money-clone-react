import { useState } from 'react'
import './ExpenseForm.css'

const ExpenseForm = ({ transactions, setTransactions }) => {
  const [description, setDescription] = useState('')
  const [category, setCategory] = useState('')
  const [amount, setAmount] = useState('')

  const addTxToList = () => {
    console.log({
      name: description,
      category: category,
      cost: parseInt(amount),
    })

    setTransactions([
      ...transactions,
      { name: description, category: category, cost: parseInt(amount) },
    ])
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor='description'>Description:</label>
      <input
        type='text'
        id='description'
        value={description}
        onChange={event => setDescription(event.target.value)}
      />

      <label htmlFor='category'>Category:</label>
      <select
        id='category'
        value={category}
        onChange={event => setCategory(event.target.value)}
      >
        <option value=''>Select a category</option>
        <option value='Transportation 🚗'>🚗Transportation</option>
        <option value='Bills 💰'>💰Bills</option>
        <option value='Food 🍜'>🍲Food</option>
        <option value='Entertainment 🎭'>🎭Entertainment</option>
      </select>

      <label htmlFor='amount'>Amount:</label>
      <input
        type='number'
        id='amount'
        value={amount}
        onChange={event => setAmount(event.target.value)}
      />

      <button type='submit' onClick={addTxToList}>
        Submit
      </button>
    </form>
  )
}

export default ExpenseForm
