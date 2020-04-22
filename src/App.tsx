import React from "react";
import Greetings from "./Component/Greetings";

const App: React.FC = () => {
  const onClick = (name: string) => {
    console.log(`${name} says hello`);
  };

  // name & onClicke 함수를 자식 컴포넌트에게 넘겨준다.
  return <Greetings name="Hello" onClick={onClick} />;
};

export default App;
