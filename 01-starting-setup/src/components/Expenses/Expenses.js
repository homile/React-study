// JSX를 사용하기 위해서 임포트한 것이 최신 리액트에서는 임포트하지 않아도 자동으로 된다.
// 42강
import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpenseFilter from "./ExpenseFilter";

function Exoenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filterExpenses = props.expenses.filter((el) => {
    // getFullYear: new Date로 생성한 날짜 중 연도를 가져온다.
    return el.date.getFullYear().toString() === filteredYear;
  });

  // 렌더링될 요소를 미리 정의하여 변수만 JSX로 작성해서 코드의 가독성을 높일 수 있다.
  let expensesContent = <p>expenses 데이터가 없습니다!</p>

  if(filterExpenses.length > 0){
    expensesContent = filterExpenses.map((el) => {
      return <ExpenseItem key={el.id} expenses={el} />
    })
  }

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        {/* <ExpenseItem expenses={expenses[0]}/>
            <ExpenseItem expenses={expenses[1]}/>
            <ExpenseItem expenses={expenses[2]}/>
            <ExpenseItem expenses={expenses[3]}/> */}
        {/* key: 어느 컴포넌트에도 추가 할 수 있다. 
          컴포넌트를 맵핑할 때는 key를 지정해주어여 한다.
          리액트가 개별의 컴포넌트로 인식하게 해주는 고유 식별 값이다.
          데이터에 고유 id가 없다면 index로 지정해주면 된다. */}

        {/* {filterExpenses.length === 0 ? (
          // &&를 사용하여 표현식을 짧게 할 수 있다.
          <p>expenses 데이터가 없습니다!</p>
        ) : (
          filterExpenses.map((el) => {
            return <ExpenseItem key={el.id} expenses={el} />;
          })
        )} */}
        {expensesContent}
      </Card>
    </div>
  );
}

export default Exoenses;
