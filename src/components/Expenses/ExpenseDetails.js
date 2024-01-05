import React, { useState } from "react";
import "./ExpenseItem.css";

export const ExpenseDetails = (props) => {

  const [amount, setamount] = useState(props.amount);
  

  const deleteExpense = () => {
    const expense = document.querySelector(".expense-item");
    expense.remove();
  };

  const updateAmount = () => {
    setamount(100);
  };

  return (
    <div>
      <div className="expense-item__description">
        <h2> {props.location}</h2>
      </div>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={deleteExpense}>Delete Expense</button>
      <button onClick={updateAmount}>Update Amount</button>
    </div>
  );
};
