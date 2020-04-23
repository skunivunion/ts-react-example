import React, { useReducer } from "react";

// 액션을 |(= or) 으로 나열
type Action = { type: "INCREASE" } | { type: "DECREASE" };

// 이전 상태(state)와 Action.type을 이용하여 새로운 상태를 만든다.
// 리듀서를 만들 땐 파라미터로 받아오는 상태의 타입과
// 함수가 리턴하는 타입을 동일하게 하는 것이 매우 중요
function reducer(state: number, action: Action): number {
  switch (action.type) {
    case "INCREASE":
      return state + 1;
    case "DECREASE":
      return state - 1;
    default:
      throw new Error("Unhandled action");
  }
}

function Counter_Reducer() {
  // reducer 함수를 이용하여 count 값을 변경, 초기값(두번째 파라미터)은 0
  const [count, dispatch] = useReducer(reducer, 0);
  // onIncrease : { type: 'INCREASE' } 객체를 반환하는 함수
  // onIncrease 함수를 실행하면 { type: 'INCREASE' }을 Action으로 하는 reducer 함수를 수행 (by dispatch({}))
  const onIncrease = () => dispatch({ type: "INCREASE" });
  // onDecrease ; { type: 'DECREASE' } 객체를 반환하는 함수
  // onIncrease 함수를 실행하면 { type: 'INCREASE' }을 Action으로 하는 reducer 함수를 수행 (by dispatch({}))
  const onDecrease = () => dispatch({ type: "DECREASE" });

  return (
    <div>
      <h1>{count}</h1>
      <div>
        <button onClick={onIncrease}>+1</button>
        <button onClick={onDecrease}>-1</button>
      </div>
    </div>
  );
}

export default Counter_Reducer;
