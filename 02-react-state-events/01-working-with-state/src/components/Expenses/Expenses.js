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
        {props.items.map((item) => (
          <ExpenseItem key={item.title} title={item.title} amount={item.amount} date={item.date} />
        ))}
      </Card>
    </div>
  );
};

export default Expenses;
