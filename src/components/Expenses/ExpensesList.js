import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = (props) => {
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expenses.</h2>;
  }


  return (
    <ul className="expenses-list">
      {props.items.map((exp) => {
        return (
          <ExpenseItem
            key={exp.id}
            location={exp.location}
            title={exp.title}
            amount={exp.amount}
            date={exp.date}
          />
        );
      })}
      {props.items.length === 1 && (
        <p>Only single Expense here. Please add more...</p>
      ) }
    </ul>
  );
};

export default ExpensesList;
