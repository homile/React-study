import React from "react";
import "./Card.css";

// 사용자 지정 컴포넌트
function Card(props) {
  // className도 porps로 받아올 수 있다.
  const classes = "card " + props.className;
  return (
    // props.children에 대해서 공부해본다.
    <div className={classes}>{props.children}</div>
  );
}

export default Card;
