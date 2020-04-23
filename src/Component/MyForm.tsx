import React, { useState } from "react";

// porps 선언
interface MyFormProps {
  onSubmit: (form: { name: string; description: string }) => void;
}

function MyForm({ onSubmit }: MyFormProps) {
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
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    // e 값: onSubmit= 의 onSubmit 위로 마우스 커서를 움직이면 알 수 있다.
    e.preventDefault();
    onSubmit(form);
    setForm({
      name: "",
      description: "",
    }); // 초기화 --> setForm() 호출했으므로 리렌더링
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" value={name} onChange={onChange} />
      <input name="description" value={description} onChange={onChange} />
      <button type="submit">등록</button>
    </form>
  );
}

export default MyForm;
