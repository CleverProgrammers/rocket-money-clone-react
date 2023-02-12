import { useState } from 'react'
import './ExpenseForm.css'

const ExpenseForm = ({ transactions, setTransactions }) => {
  // Use the useState hook to create state variables for the form inputs
  const [description, setDescription] = useState('')
  const [category, setCategory] = useState('')
  const [amount, setAmount] = useState('')

  // Create a function to handle form submission
  const handleSubmit = event => {
    event.preventDefault()
    // TODO: Submit the form data to your backend or perform some other action
  }

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
      {/* The form will have three input fields, one for each form field */}
      <label htmlFor='description'>Description:</label>
      <input
        type='text'
        id='description'
        value={description}
        onChange={event => setDescription(event.target.value)}
      />

      {/* Replace the text input for the category field with a dropdown menu */}
      <label htmlFor='category'>Category:</label>
      <select
        id='category'
        value={category}
        onChange={event => setCategory(event.target.value)}
      >
        {/* Add options for the different categories */}
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

      {/* Add a submit button to submit the form */}
      <button type='submit' onClick={addTxToList}>
        Submit
      </button>
    </form>
  )
}

export default ExpenseForm
