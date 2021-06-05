import React, { useRef } from "react";

const TodoForm = ({ add }) => {
  const inputRef = useRef();
  function click() {
    add(inputRef.current.value);
    inputRef.current.value = "";
  }
  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={click}>추가</button>
    </div>
  );
};

export default TodoForm;
