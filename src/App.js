import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    {
      id: "e1",
      locationOfExpenditure: "India",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    {
      id: "e2",
      locationOfExpenditure: "India",
      title: "New TV",
      amount: 799.49,
      date: new Date(2021, 2, 12),
    },
    {
      id: "e3",
      locationOfExpenditure: "India",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      locationOfExpenditure: "India",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];
  return (
    <div>
      <h2>Let's get started!</h2>
      {expenses.map((exp) => {
        return (
          <ExpenseItem
            locationOfExpenditure={exp.locationOfExpenditure}
            title={exp.title}
            amount={exp.amount}
            date={exp.date}
          />
        );
      })}
    </div>
  );
}

export default App;
