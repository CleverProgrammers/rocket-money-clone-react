import React, { useState } from 'react'
import './ExpenseForm.css'

/* Component for the expense form */
// ⭐ Pass the transactions and setTransactions as props
const ExpenseForm = () => {
  // ⭐ State variables to store the form data */

  // ⭐ Function to add a transaction to the list
  // ⭐ Make sure to update the transactions state variable
  // ⭐ Make sure to reset the form data after adding a transaction

  return (
    <form onSubmit={() => console.log('form submitted')}>
      {/* Label for the description input field  */}
      <label htmlFor='description'>Description:</label>
      {/* Input field for the description */}
      <input
        type='text'
        id='description'
        // ⭐ Update the description value
        value={''}
        // ⭐ Update the description state variable on change
      />
      {/* Label for the category select field */}
      <label htmlFor='category'>Category:</label>
      {/* Select field for the category */}
      <select
        id='category'
        // ⭐ Update the category value
        value={'category'}
        /* ⭐ Update the category state variable on change */
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
        // ⭐ Update the amount value
        value={0}
        // ⭐ Update the amount state variable on change
      />
      {/* Submit button */}
      <button type='submit'>Submit</button>
    </form>
  )
}

export default ExpenseForm
