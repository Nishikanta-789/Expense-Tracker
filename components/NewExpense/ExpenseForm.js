import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = ({ addExpense, setButtonClicked }) => {
  // -----------------Storing New Expense---------------

  const [newTitle, setNewTitle] = useState("");
  const [newAmount, setNewAmount] = useState("");
  const [newDate, setNewDate] = useState("");

  //   const [newExpense, setNewExpense] = useState({
  //     newTitle: "",
  //     newAmount: "",
  //     newDate: "",
  //   });

  const titleChangeHandler = (event) => {
    // setNewExpense({ ...prevState, newTitle: event.target.value }
    // );
    // setNewExpense((prevState) => {
    //   return { ...prevState, newTitle: event.target.value };
    // });
    setNewTitle(event.target.value);
  };
  const amountChangeHandler = (event) => {
    setNewAmount(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setNewDate(event.target.value);
  };

  //-------------Form Submit Handling--------------

  const formSubmitHandler = (event) => {
    event.preventDefault();
    const newExpneseData = {
      title: newTitle,
      amount: +newAmount,
      date: new Date(newDate),
      id: Math.random(),
    };

    addExpense(newExpneseData);

    setNewTitle("");
    setNewAmount("");
    setNewDate("");

    setButtonClicked(false);
  };

  const cancelButtonHandler = () => {
    setButtonClicked(false);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={newTitle} onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="1"
            value={newAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2018-04-04"
            max="2022-12-31"
            value={newDate}
            onChange={dateChangeHandler}
          />
        </div>
        <div className="new-expense__actions">
          <button type="button" onClick={cancelButtonHandler}>
            Cancel
          </button>
          <button type="submit">Add Expense</button>
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;
