import React, { useState, useRef } from "react";

// porps 선언
interface MyFormProps {
  onSubmit: (form: { name: string; description: string }) => void;
}

function MyForm({ onSubmit }: MyFormProps) {
  // useRef를 사용 할 땐 Generics 로 타입을 정한다.
  // useRef는 리액트 컴포넌트에서 외부 라이브러리의 인스턴스 또는 DOM 을 특정 값 안에 담을 때 사용 (초기값 null로 설정)
  // 이를 통해 컴포넌트 내부에서 관리하고 있는 값을 관리할 때 유용. 단, 이 값은 렌더링과 관계가 없어야 한다.
  const inputRef = useRef<HTMLInputElement>(null);

  // form state 선언
  const [form, setForm] = useState({
    name: "",
    description: "",
  });

  const { name, description } = form;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // e 값: onChange= 의 onChange 위로 마우스 커서를 움직이면 알 수 있다.
    const { name, value } = e.target;
    setForm({
      ...form, // 현재 form 값 복사
      [name]: value, // name 값을 value로 바꾼다.
    }); // --> setForm() 호출했으므로 리렌더링

    // inputRef.current 안의 값을 사용 하려면 null 체킹을 해주어야 한다.
    if (!inputRef.current) {
      return;
    }
    // inputRef에 포커스 주기
    inputRef.current.focus();
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    // e 값: onSubmit= 의 onSubmit 위로 마우스 커서를 움직이면 알 수 있다.
    e.preventDefault();

    // 부모 컴포넌트로부터 받은 onSubmit 함수 실행 (현재 로그(form 값) 남김)
    onSubmit(form);

    setForm({
      name: "",
      description: "",
    }); // 초기화 --> setForm() 호출했으므로 리렌더링
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input name="name" value={name} onChange={onChange} ref={inputRef} />
        <input name="description" value={description} onChange={onChange} />
        <button type="submit">등록</button>
      </form>
    </>
  );
}

export default MyForm;
