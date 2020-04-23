import React, { useState } from "react";

function Counter() {
  // state로 사용
  // count는 number 타입을 가지며, 초기값은 0, 값은 setCount() 함수로만 변경
  const [count, setCount] = useState<number>(0);
  // count 증가 함수 정의
  const onIncrease = () => setCount(count + 1);
  // count 감소 함수 정의
  const onDecrease = () => setCount(count - 1);

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

export default Counter;

// // state 사용 예
// type Information = { name: string; description: string };
// type Todo = { id: number; text: string; done: boolean };
// function StateExample() {
//     // inof Information 타입의 객체 또는 null 값을 가질 수 있으며,
//     //초기 값은 null, 값은 setInformation() 함수로만 변경
//     const [info, setInformation] = useState<Information | null>(null);
//     // todos는 Todo 타입의 객체의 배열이며,
//     // 초기값은 빈 배열, 값은 setTodos() 함수로만 변경
//     const [todos, setTodos] = useState<Todo[]>([]);  // === useState([] as Todo[]);
// }
