import React, { useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter/ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [year, setYear] = useState("2020");

  const onSelectHandler = (select) => {
    setYear(select);
  };

  const FilteredExpenses = props.items.filter(
    (expense) => expense.date.getFullYear().toString() === year
  );

  return (
    <Card className="expenses">
      <ExpensesFilter year={year} onSelect={onSelectHandler}></ExpensesFilter>
      <ExpensesChart filteredExpenses={FilteredExpenses}/>
      <ExpensesList expenses={FilteredExpenses}></ExpensesList>
    </Card>
  );
};

export default Expenses;
