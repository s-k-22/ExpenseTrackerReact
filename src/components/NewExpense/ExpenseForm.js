import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredLocation, setEnteredLocation] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  // const [userInput, setUserInput] = useState({
  //   enteredTitle: "",
  //   enteredAmount: "",
  //   enteredDate: "",
  // });

  const titleChangeHandler = (e) => {
    setEnteredTitle(e.target.value);

    // setUserInput({ ...userInput, enteredTitle: e.target.value });
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredTitle: e.target.value };
    // });
  };

  const locationChangeHandler = (e) => {
    setEnteredLocation(e.target.value);

    // setUserInput({ ...userInput, enteredTitle: e.target.value });
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredTitle: e.target.value };
    // });
  };

  const amountChangeHandler = (e) => {
    setEnteredAmount(e.target.value);

    // setUserInput({ ...userInput, enteredAmount: e.target.value });
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredAmount: e.target.value };
    // });
  };

  const dateChangeHandler = (e) => {
    setEnteredDate(e.target.value);

    // setUserInput({ ...userInput, enteredDate: e.target.value });
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredDate: e.target.value };
    // });
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      location: enteredLocation,
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData);
    setEnteredLocation("");
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };
  
  const btn = document.createElement("button");
  btn.innerHTML = "Add New Expense";
  btn.style.color = "black";

  const showForm = () => {
    btn.style.visibility = "hidden";

    document.querySelector("form").style.display = "block";
  };

  btn.onclick = showForm;
  const hideForm = () => {
    console.log("clicked");
    // document.querySelector("form").style.visibility = "hidden";
    document.querySelector("form").style.display = "none";
    document.querySelector("#outer-div").appendChild(btn);
  };

  return (
    <div id="outer-div">
      <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Location</label>
            <input
              type="text"
              value={enteredLocation}
              onChange={locationChangeHandler}
            />
          </div>

          <div className="new-expense__control">
            <label>Title</label>
            <input
              type="text"
              value={enteredTitle}
              onChange={titleChangeHandler}
            />
          </div>

          <div className="new-expense__control">
            <label>Amount</label>
            <input
              type="number"
              value={enteredAmount}
              onChange={amountChangeHandler}
            />
          </div>

          <div className="new-expense__control">
            <label>Date</label>
            <input
              type="date"
              value={enteredDate}
              onChange={dateChangeHandler}
            />
          </div>
        </div>
        <div className="new-expense__actions">
          <button onClick={hideForm}>Cancel</button>
          <button type="submit" onClick={hideForm}>
            Add Expense
          </button>
        </div>
      </form>
    </div>
  );
};

export default ExpenseForm;
