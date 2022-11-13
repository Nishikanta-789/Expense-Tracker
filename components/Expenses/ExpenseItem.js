// import React, { useState } from "react";s
import Card from "./Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  // const [title, setTitle] = useState(props.expense.title);
  // const titleChangeClickHandler = () => {
  //   setTitle("Title has Changed.");
  // };
  return (
    <li>
      <Card className="expense-item">
        <div>
          <ExpenseDate date={props.expense.date} />
        </div>

        <div className="expense-item__description">
          <h2>{props.expense.title}</h2>
          <div className="expense-item__price">{props.expense.amount}</div>
        </div>
        {/* <button onClick={titleChangeClickHandler}>Change Title</button> */}
      </Card>
    </li>
  );
};

export default ExpenseItem;
