import React, { useState } from 'react'
import './ExpenseForm.css'
function ExpenseForm() {
  // Use the useState hook to create state variables for the form inputs
  const [description, setDescription] = useState('')
  const [category, setCategory] = useState('')
  const [amount, setAmount] = useState(0)

  // Create a function to handle form submission
  const handleSubmit = event => {
    event.preventDefault()
    // TODO: Submit the form data to your backend or perform some other action
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
        <option value='transportation'>🚗Transportation</option>
        <option value='bills'>💰Bills</option>
        <option value='food'>🍲Food</option>
        <option value='entertainment'>🎭Entertainment</option>
      </select>

      <label htmlFor='amount'>Amount:</label>
      <input
        type='number'
        id='amount'
        value={amount}
        onChange={event => setAmount(event.target.value)}
      />

      {/* Add a submit button to submit the form */}
      <button type='submit'>Submit</button>
    </form>
  )
}

export default ExpenseForm
