import { Card } from "./components/UI/Card";
import NewExpense from "./components/NewExpense/NewExpense";
import "./index.css";
import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";

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

  const submitExpenseDataHandler = (expense) => {
    setExpenses((prevState) => {
      return [expense, ...prevState];
    });
  };

  return (
    <Card className="expenses">
      <NewExpense onSubmitExpenseData={submitExpenseDataHandler} />
      <Expenses items={expenses}/>
    </Card>
  );
};

export default App;
