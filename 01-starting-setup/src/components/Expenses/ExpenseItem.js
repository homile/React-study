import React, { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

// 컴포넌트파일을 생성할 때 맨 앞은 대문자로 하면 이어주는 첫 단어는 대문자로 한다.
// 소문자로 작성할 경우 html 태그로 인식한다.
// props로 해당 값을 다 받아올 수 있다.
// function ExpenseItem(props)
function ExpenseItem({ expenses }) {
  const [title, setTitle] = useState(expenses.title);

  const clickHandler = () => {
    // 단지 새로운 값으로 변경해주는 것이 아니다.
    // 메모리에서 관리된다.
    // state가 변화할 때 컴포넌트 함수가 재렌더링 된다.
    setTitle("Updated!");
  };

  return (
    // 상위 태그가 존재해야 한다. fragment 사용 가능<></>
    // 코드 정렬 쉬프트+옵션+f
    <li>
      <Card className="expense-item">
        <ExpenseDate expenses={expenses} />
        <div className="expense-item__description">
          <h2>{title}</h2>
          <div className="expense-item__price">${expenses.amount}</div>
        </div>
        {/* jsx에서 함수를 실행할 땐 ()를 생략한다. */}
        <button onClick={clickHandler}>Change Title</button>
      </Card>
    </li>
  );
}

// 컴포넌트 함수를 다른 곳에서 사용할 수 있도록 하기위한 코드
export default ExpenseItem;
