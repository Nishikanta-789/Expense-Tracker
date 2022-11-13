import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./AddExpense.css";

const AddExpense = (props) => {
  const [buttonClicked, setButtonClicked] = useState(false);

  const addExpense = (newExpense) => {
    props.addNewExpense(newExpense);
  };

  const newExpenseClickHandler = () => {
    setButtonClicked(true);
  };

  if (buttonClicked) {
    return (
      <div className="new-expense">
        <ExpenseForm
          addExpense={addExpense}
          setButtonClicked={setButtonClicked}
        />
      </div>
    );
  }
  return (
    <div className="new-expense">
      <button onClick={newExpenseClickHandler}>Add New Expense</button>
    </div>
  );
};

export default AddExpense;
