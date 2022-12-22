import React, { useState } from "react";
import "./ExpenseForm.css";

export const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value)
  }

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value)
  }
  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
       title: enteredTitle,
       amount: enteredAmount,
       date: new Date(enteredDate)
    }
   props.onSaveExpenseData(expenseData)
   setEnteredAmount('');
   setEnteredDate('');
   setEnteredTitle('')
  }
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={enteredTitle} onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" value={enteredAmount} min="0.01" step="0.01" onChange={amountChangeHandler}/>
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" value={enteredDate} min="2019-01-01" max="2024-10-10" onChange={dateChangeHandler} />
        </div>
        <div className="new-expense__actions">
          <button type="submit">Add Expenses</button>
        </div>
      </div>
    </form>
  );
};
