import React, { useState } from 'react'
import './ExpenseForm.css'

/* Component for the expense form */
const ExpenseForm = ({ transactions, setTransactions }) => {
  /* State variables to store the form data */
  const [description, setDescription] = useState('')
  const [category, setCategory] = useState('')
  const [amount, setAmount] = useState('')

  /* Function to add a transaction to the list */
  const addTxToList = () => {
    /* Log the transaction data to the console */
    console.log({
      name: description,
      category: category,
      cost: parseInt(amount),
    })

    /* Add the transaction to the list */
    setTransactions([
      ...transactions,
      { name: description, category: category, cost: parseInt(amount) },
    ])
  }

  return (
    <form onSubmit={event => event.preventDefault()}>
      {/* Label for the description input field  */}
      <label htmlFor='description'>Description:</label>
      {/* Input field for the description */}
      <input
        type='text'
        id='description'
        value={description}
        //Update the description state variable on change
        onChange={event => setDescription(event.target.value)}
      />
      {/* Label for the category select field */}
      <label htmlFor='category'>Category:</label>
      {/* Select field for the category */}
      <select
        id='category'
        value={category}
        /* Update the category state variable on change */
        onChange={event => setCategory(event.target.value)}
      >
        {/* Placeholder option for the select field */}
        <option value=''>Select a category</option>
        {/* Options for the category */}
        <option value='Transportation 🚗'>🚗Transportation</option>
        <option value='Bills 💰'>💰Bills</option>
        <option value='Food 🍜'>🍲Food</option>
        <option value='Entertainment 🎭'>🎭Entertainment</option>
      </select>
      {/* Label for the amount input field */}
      <label htmlFor='amount'>Amount:</label>
      {/* Input field for the amount */}{' '}
      <input
        type='number'
        id='amount'
        value={amount}
        /* Update the amount state variable on change */
        onChange={event => setAmount(event.target.value)}
      />
      {/* Submit button */}
      <button type='submit' onClick={addTxToList}>
        Submit
      </button>
    </form>
  )
}

export default ExpenseForm
