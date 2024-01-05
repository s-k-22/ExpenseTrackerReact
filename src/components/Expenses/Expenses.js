import React,{useState} from "react";
import { Card } from "../UI/Card";
import ExpenseFilter from './ExpenseFilter'
import "./Expenses.css";
import ExpensesList from "./ExpensesList";

const Expenses = (props) => {
     const [filteredYear, setFilteredYear] = useState("2020");

     const filterChangeHandler = (selectedYear) => {
       setFilteredYear(selectedYear);
     };

     const filteredExpenses = props.items.filter((exp) => {
       return exp.date.getFullYear().toString() === filteredYear;
     });

     
  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesList items={filteredExpenses}/>
      </Card>
    </div>
  );
};

export default Expenses;
