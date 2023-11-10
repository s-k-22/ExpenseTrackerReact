import React from 'react';
import './ExpenseItem.css'

export const ExpenseDetails = (props) => {
  return (
    <div>
      <div>{props.locationOfExpenditure}</div>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </div>
  );
}
