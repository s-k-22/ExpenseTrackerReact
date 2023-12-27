import React from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
  const titleChangeHandler = (e) => {
    console.log(e.target.value);
  };

  const amountChangeHandler = (e) => {
    console.log(e.target.value);
  };

  const dateChangeHandler = (e) => {
    console.log(e.target.value);
  };

  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler} />
          <label>Amount</label>
          <input type="number" onChange={amountChangeHandler} />
          <label>Date</label>
          <input type="date" onChange={dateChangeHandler} />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
