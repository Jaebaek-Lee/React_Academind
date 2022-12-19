import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [activeSubmit, setActiveSubmit] = useState(false);

  const addExpenseHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setActiveSubmit(false);
  };

  let activeSubmitButton = <></>;

  const activeSubmitHandler = () => {
    setActiveSubmit(true);
  };

  const cancelButtonHandler = () => {
    setActiveSubmit(false);
  };

  if (activeSubmit === false) {
    activeSubmitButton = (
      <button type="button" onClick={activeSubmitHandler}>
        Add new expense
      </button>
    );
  } else {
    activeSubmitButton = <ExpenseForm onCancel = {cancelButtonHandler} onAddExpense={addExpenseHandler} />;
  }

  return <div className="new-expense">{activeSubmitButton}</div>;
};

export default NewExpense;
