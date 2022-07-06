// JSX를 사용하기 위해서 임포트한 것이 최신 리액트에서는 임포트하지 않아도 자동으로 된다.
// 42강
import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpenseFilter from "./ExpenseFilter";

function Exoenses(props) {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  }

  return (
    <div>
      <Card className="expenses">
      <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
        {/* <ExpenseItem expenses={expenses[0]}/>
      <ExpenseItem expenses={expenses[1]}/>
      <ExpenseItem expenses={expenses[2]}/>
      <ExpenseItem expenses={expenses[3]}/> */}
        {props.expenses.map((el) => {
          return <ExpenseItem expenses={el} />;
        })}
      </Card>
    </div>
  );
}

export default Exoenses;
