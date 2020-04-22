import React from "react";

// props 선언 : type 또는 interface를 쓴다.
type GreetingsProps = {
  name: string;
  mark: string;
  optional?: string; // ? : 옵션임을 나타낸다.
  onClick: (name: string) => void; // 아무것도 리턴하지 않는다.
};

function Greetings({ name, mark, optional, onClick }: GreetingsProps) {
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
}

// mark 값이 없을 경우 사용
Greetings.defaultProps = {
  mark: "!",
};

export default Greetings;
