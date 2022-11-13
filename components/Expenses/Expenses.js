import React, { useState } from "react";
import Card from "./Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpenseChart from "./ExpenseChart";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2018");
  // console.log(props.expenses);
  const selectedYear = (year) => {
    setFilteredYear(year);
    // console.log(year);
  };

  const filteredExpenses = props.expenses.filter((expense) => {
    return parseInt(filteredYear) === parseInt(expense.date.getFullYear());
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          defaultYear={filteredYear}
          selectedYear={selectedYear}
        />
        <ExpenseChart expenses={filteredExpenses} />

        {/* --------------Display All Expense Items--------------------- */}
        {/* {props.expenses.map((expense) => (
          <ExpenseItem key={expense.id} expense={expense} />
        ))} */}

        {/*  --------------Display Filtered Expense Items--------------------- */}
        {/* {filteredExpenses.map((expense) => {
          return <ExpenseItem key={expense.id} expense={expense} />;
        })} */}

        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
