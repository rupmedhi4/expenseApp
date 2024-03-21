
import { useState } from 'react';
import './ExpenseItem.css';
import ExpenseForm from './ExpenseForm';
import Chart from './Chart';

function ExpenseItem({ expenses }) {

     const [expense,setExpense] = useState(expenses)
     const [amount,setAmount] = useState(0)


    const deleteHandler = (id)=>{
            let updatedExpense = expenses.filter((data)=>data.id !== id)
            setExpense(updatedExpense)
     }

     const addHandler = (id) => {
        let updatedExpenses = expense.map((expense) => {
            if (expense.id === id) {
                const updatedAmount = expense.amount + 100;
                return { ...expense, amount: updatedAmount };
            }
            return expense;
        });
        setExpense(updatedExpenses);

    }
     const addExpenseHandler = (expense) => {
        setExpense((prevExpense)=>[...prevExpense,expense])
    }
     const titleHandler = (id) => {
        let updatedExpenses = expense.map((expense) => {
            if (expense.id === id) {
                const updatedTitle = "updated "
                return { ...expense, title: updatedTitle };
            }
            return expense;
        });
        setExpense(updatedExpenses);

    }
    

    return (
        <div className='parent-div'>
        <ExpenseForm addExpenseHandler={addExpenseHandler}/>
        <Chart/>
            {expense.map((data, index) => {

                const expenseDate = new Date(data.date);
                const year = expenseDate.getFullYear();
                const month = expenseDate.toLocaleString('default', { month: 'long' });
                const date = expenseDate.getDate();
                const day = expenseDate.toLocaleString('default', { weekday: 'long' });
                const time = expenseDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
                return (
                    <div key={index} className="expense-item">
                        <div className="expense-date">

                            <div className='date'>
                                <div >{`${month}`}</div>
                                <div>{`${year}`}</div>
                                <div>{`${date}`}</div>

                            </div>
                            <div>
                                <span style={{ marginLeft: "2rem", color: "white" }}>{data.title}</span>
                            </div>

                        </div>

                        <div className="expense-item-description">
                             <div className="expense-amount">${data.amount}</div>
                             <button onClick={()=>addHandler(data.id)}>Add Amount</button>
                             <button onClick={()=>titleHandler(data.id)}>Title Change</button>
                             <button onClick={()=>deleteHandler(data.id)}>Delete Expense</button>
                        </div>
                       
                    </div>
                )
            })}

        </div>


    );
}

export default ExpenseItem;