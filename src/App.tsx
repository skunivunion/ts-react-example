import React from "react";
import Greetings from "./Component/Greetings";
import Counter from "./Component/Counter";
import MyForm from "./Component/MyForm";

const App: React.FC = () => {
  // onClick 정의
  const onClick = (name: string) => {
    console.log(`${name} says hello`);
  };

  const onSubmit = (form: { name: string; description: string }) => {
    console.log(form);
  };

  // name & onClicke 함수를 자식 컴포넌트에게 넘겨준다.
  return (
    <div>
      <Greetings
        name="Seungman"
        optional="This is optional..."
        onClick={onClick}
      />
      <hr />
      <Counter />
      <hr />
      <MyForm onSubmit={onSubmit} />
    </div>
  );
};

export default App;
