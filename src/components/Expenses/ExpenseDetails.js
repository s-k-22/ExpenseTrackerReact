import React, { useState } from "react";
import "./ExpenseItem.css";

export const ExpenseDetails = (props) => {
  const [title, setTitle] = useState(props.title);
  // console.log("title ", title); //latest value of title

  const [amount, setamount] = useState(props.amount);
  
  const clickHandler = () => {
    setTitle("updated");
    console.log(title);
  };

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
        <h2> {props.locationOfExpenditure}</h2>
      </div>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">{amount}</div>
      </div>
      <button onClick={clickHandler}>change title</button>
      <button onClick={deleteExpense}>Delete Expense</button>
      <button onClick={updateAmount}>Update Amount</button>
    </div>
  );
};
