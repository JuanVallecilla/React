import React, { useState } from "react";

import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2019");

  const filterChangeHandler = (selectedFilterYear) => {
    setFilteredYear(selectedFilterYear);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
        {props.items.map((expense) => (
          // we want every-item to have a clear unique id.
          <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />
        ))}
      </Card>
    </div>
  );
};

export default Expenses;
