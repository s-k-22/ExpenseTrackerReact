import React from "react";
import "./ExpenseItem.css";

export const ExpenseDetails = (props) => {
  const clickHandler = () => {
    console.log("clicked");
  };
  const deleteExpense = () => {
    const expense = document.querySelector(".expense-item");
    // console.log(expense);
    expense.remove();
  };
  return (
    <div>
      <div>{props.locationOfExpenditure}</div>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>change title</button>
      <button onClick={deleteExpense}>Delete Expense</button>
    </div>
  );
};
