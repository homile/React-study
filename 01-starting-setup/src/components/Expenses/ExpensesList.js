import React from "react";
import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";

function ExpensesList(props) {
  // 렌더링될 요소를 미리 정의하여 변수만 JSX로 작성해서 코드의 가독성을 높일 수 있다.

  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expenses.</h2>
  }
  
  return <ul className="expenses-list">
    {props.items.map((el) => {
      return <ExpenseItem key={el.id} expenses={el} />;
    })}
  </ul>;
}

export default ExpensesList;
