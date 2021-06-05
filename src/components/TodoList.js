import React from "react";
import useReduxState from "../hooks/useReduxState";

const TodoList = () => {
  const state = useReduxState();
  return (
    <ul>
      {state.todos.map((todo, idx) => {
        return <li key={idx}>{todo.text}</li>;
      })}
    </ul>
  );
};

export default TodoList;
