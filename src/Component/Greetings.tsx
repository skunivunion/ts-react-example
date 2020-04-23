import React from "react";

// 부모 컴포넌트로부터 받는 props 선언 : type( '=' 사용)을 사용할 수 있다.
interface GreetingsProps {
  name: string;
  mark?: string; // ? : 생략 가능
  optional?: string; // ? : 부모 컴포넌트에서 보내지 않아도 된다.
  onClick: (name: string) => void; // 아무것도 리턴하지 않는다.
}

// mark = '!' : default value
// function 사용
//function Greetings({ name, mark = "!", optional, onClick }: GreetingsProps) {
// 화살표 함수 사용
const Greetings = ({ name, mark = "!", optional, onClick }: GreetingsProps) => {
  // 버튼 클릭 처리
  const handleClick = () => onClick(name);

  // 함수형 컴포넌트에는 render() 함수가 없다.
  return (
    <div>
      Hello, {name} {mark}
      {optional && <p>{optional}</p>}
      <div>
        <button onClick={handleClick}>Click Me</button>
      </div>
    </div>
  );
};

export default Greetings;
