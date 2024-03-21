import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export default function ExpenseForm({ addExpenseHandler }) {
  const [enteredExpense, setEnteredExpense] = useState({
    date: '',
    title: '',
    amount: '',
    id: null
  });

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setEnteredExpense((prevExpense) => ({
      ...prevExpense,
      [name]: value
    }));
  };

  const formHandler = (e) => {
    e.preventDefault(); 
    const expenseWithId = { ...enteredExpense, id: uuidv4() }; 
    addExpenseHandler(expenseWithId); 
    setEnteredExpense({ 
      date: '',
      title: '',
      amount: '',
      id: null
    });
  };

  return (
    <form style={{ backgroundColor: "blue", padding: "1rem" }} onSubmit={formHandler}>
      <div>
        <div className='form-group'>
          <div className='form-group-row'>
            <label htmlFor="title" style={{ color: "white" }}>Title</label>
            <input
              type="text"
              id="title"
              name="title"
              placeholder='enter your title'
              value={enteredExpense.title}
              onChange={inputHandler}
            />
          </div>
          <div className='form-group-row'>
            <label htmlFor="amount" style={{ color: "white" }}>Amount</label>
            <input
              type="text"
              id="amount"
              name="amount"
              placeholder='enter your Amount'
              value={enteredExpense.amount}
              onChange={inputHandler} 
            />
          </div>
        </div>
        <div className='form-group-row' style={{ maxWidth: "11rem" }}>
          <label htmlFor="date" style={{ color: "white" }}>Date</label>
          <input
            type="date"
            id="date"
            name="date"
            value={enteredExpense.datee}
            onChange={inputHandler} 
          />
        </div>
      </div>
      <button type='submit' className='btn' >Add Expense</button>
    </form>
  );
}
