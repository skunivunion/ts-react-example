import React, { useReducer } from "react";

type Color = "red" | "orange" | "yellow";

// props 선언
interface State {
  count: number;
  text: string;
  color: Color;
  isGood: boolean;
}

// 액션 정의 : |(= or) 으로 나열
type Action =
  | { type: "SET_COUNT"; count: number }
  | { type: "SET_TEXT"; text: string }
  | { type: "SET_COLOR"; color: Color }
  | { type: "TOGGLE_GOOD" };

// 이전 상태(state)와 Action.type을 이용하여 새로운 상태를 만든다.
// 리듀서를 만들 땐 파라미터로 받아오는 상태의 타입과
// 함수가 리턴하는 타입을 동일하게 하는 것이 매우 중요
function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "SET_COUNT":
      return {
        ...state,
        count: action.count, // count가 자동완성되며, number 타입인걸 알 수 있다.
      };
    case "SET_TEXT":
      return {
        ...state,
        text: action.text, // text가 자동완성되며, string 타입인걸 알 수 있다.
      };
    case "SET_COLOR":
      return {
        ...state,
        color: action.color, // color가 자동완성되며, color가 color 타입인걸 알 수 있다.
      };
    case "TOGGLE_GOOD":
      return {
        ...state,
        isGood: !state.isGood,
      };
    default:
      throw new Error("Unhandled action");
  }
}

function ReducerSample() {
  // reducer 함수를 이용하여 state 값을 변경, 두번째 파라미터로 초기값 설정
  const [state, dispatch] = useReducer(reducer, {
    count: 0,
    text: "hello",
    color: "red",
    isGood: true,
  });

  const setCount = () => dispatch({ type: "SET_COUNT", count: 5 }); // count를 넣지 않으면 에러발생
  const setText = () => dispatch({ type: "SET_TEXT", text: "bye" }); // text를 넣지 않으면 에러발생
  const setColor = () => dispatch({ type: "SET_COLOR", color: "orange" }); // orange를 넣지 않으면 에러발생
  const toggleGood = () => dispatch({ type: "TOGGLE_GOOD" });

  return (
    <div>
      <p>
        <code>count: </code> {state.count}
      </p>
      <p>
        <code>text: </code> {state.text}
      </p>
      <p>
        <code>color: </code> {state.color}
      </p>
      <p>
        <code>isGood: </code> {state.isGood ? "true" : "false"}
      </p>
      <div>
        <button onClick={setCount}>SET_COUNT</button>
        <button onClick={setText}>SET_TEXT</button>
        <button onClick={setColor}>SET_COLOR</button>
        <button onClick={toggleGood}>TOGGLE_GOOD</button>
      </div>
    </div>
  );
}

export default ReducerSample;
