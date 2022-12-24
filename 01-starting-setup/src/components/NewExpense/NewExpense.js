import React, { useState } from 'react'
import { ExpenseForm } from './ExpenseForm'
import './NewExpense.css'

export const NewExpense = (props) => {
  const [openForm, SetOpenForm] = useState(false)
  
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    }
   props.onAddExpense(expenseData)
  }
  const formToOpen = () => {
    SetOpenForm(true)
  }

  const formToClose = () => {
    SetOpenForm(false)
  }
  return (
    <div className='new-expense'>
      {!openForm &&<button onClick={formToOpen}>Add New Expense</button>}
      {openForm && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onClose={formToClose}/>}
    </div>
  )
}
