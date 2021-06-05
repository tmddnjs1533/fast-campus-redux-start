import { useDispatch } from "react-redux";
import TodoForm from "../components/TodoForm";
import { useCallback } from "react";
import { addTodo } from "../redux/modules/todos";

const TodoFormContainer = () => {
  const dispatch = useDispatch();
  const add = useCallback(
    (text) => {
      dispatch(addTodo(text));
    },
    [dispatch]
  );

  return <TodoForm add={add} />;
};

export default TodoFormContainer;
