import React from "react";
import Greetings from "./Component/Greetings";
import Counter from "./Component/Counter";
import Counter_Reducer from "./Component/Counter_Reducer";
import MyForm from "./Component/MyForm";
import ReducerSample from "./Component/ReducerSample";

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
        name="Dogfooter"
        optional="This is optional..."
        onClick={onClick}
      />
      <hr />
      <h2>Counter</h2>
      <Counter />
      <hr />
      <h2>Counter with useReducer</h2>
      <Counter_Reducer />
      <hr />
      <MyForm onSubmit={onSubmit} />
      <hr />
      <ReducerSample />
    </div>
  );
};

export default App;
