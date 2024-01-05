import "./ExpenseItem.css";
import { ExpenseDate } from "./ExpenseDate";
import { ExpenseDetails } from "./ExpenseDetails";
import { Card } from "../UI/Card";

const ExpenseItem = (props) => {
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <ExpenseDetails
          location={props.location}
          title={props.title}
          amount={props.amount}
        />
      </Card>
    </li>
  );
};

export default ExpenseItem;
