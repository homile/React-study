import { useState, useEffect } from 'react';

import Card from './Card';
import useCounter from '../hooks/use-counter';

const ForwardCounter = () => {

  // 컴포넌트 내 커스텀 훅 호출
  // 커스텀 훅에서 만들어진 counter 상태가 묶인다?
  // 상태나 효과를 공유하지는 않는다.
  const counter = useCounter();

  // const [counter, setCounter] = useState(0);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCounter((prevCounter) => prevCounter + 1);
  //   }, 1000);

  //   return () => clearInterval(interval);
  // }, []);

  return <Card>{counter}</Card>;
};

export default ForwardCounter;
