import React from 'react';
// CSS 모듈 사용
import classes from './Card.module.css';

function Card(props) {
  return (
    <div className={`${classes.card} ${props.className}`}>{props.children}</div>
  )
}

export default Card