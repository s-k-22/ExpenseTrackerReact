import "./ExpenseItem.css";

function ExpenseItem() {
  const expenseDate = new Date(2023, 11, 10);
  const expenseTitle = "Car Insurance";
  const expenseAmount = 294.67;
  const locationOfExpenditure = "India";
  return (
    <div className="expense-item">
      <div>{expenseDate.toISOString()}</div>
      <div>{locationOfExpenditure}</div>
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price">${expenseAmount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
