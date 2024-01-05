import { Card } from "./components/UI/Card";
import ExpenseItem from "./components/Expenses/ExpenseItem";
import NewExpense from "./components/Expenses/NewExpense/NewExpense";
import "./index.css";
import { useState } from "react";
import ExpensesFilter from "./components/Expenses/ExpenseFilter";

const intial_expenses = [
  {
    id: "e1",
    location: "India",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  {
    id: "e2",
    location: "US",
    title: "New TV",
    amount: 799.49,
    date: new Date(2021, 2, 12),
  },
  {
    id: "e3",
    location: "UK",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    location: "India",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(intial_expenses);
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
     };

  const submitExpenseDataHandler = (expense) => {
    setExpenses((prevState) => {
      return [expense, ...prevState];
    });
  };

  const filteredExpenses = expenses.filter((exp) => {
    return exp.date.getFullYear() == filteredYear;
  });

  return (
    <Card className="expenses">
      <NewExpense onSubmitExpenseData={submitExpenseDataHandler} />
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      {filteredExpenses.map((exp) => {
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
    </Card>
  );
};

export default App;
