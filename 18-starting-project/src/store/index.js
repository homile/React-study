import { createStore } from "redux";

// 초기 스테이트 값 지정
const initialState = { counter: 0, showCounter: true };

const conuterReducer = (state = initialState, action) => {
  if (action.type === "increment") {
    // redux를 사용할 때 원본을 손상하면 안된다.
    return {
      counter: state.counter + 1,
      showCounter: state.showCounter,
    };
  }

  if (action.type === "decrement") {
    return {
      counter: state.counter - 1,
      showCounter: state.showCounter,
    };
  }

  if (action.type === "increase") {
    return {
      counter: state.counter + action.amount,
      showCounter: state.showCounter,
    };
  }

  if (action.type === "toggle") {
    return {
      showCounter: !state.showCounter,
      counter: state.counter
    };
  }

  return state;
};

const store = createStore(conuterReducer);

export default store;
