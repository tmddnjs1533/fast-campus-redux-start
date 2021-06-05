import { Link } from "react-router-dom";
import TodoListContainer from "../containers/TodoListContainer";
import TodoFormContainer from "../containers/TodoFormContainer";

export default function Todos() {
  return (
    <div>
      <h1>Todos</h1>
      <ul>
        <li>
          <Link to="/">home</Link>
        </li>
        <li>
          <Link to="/users">users</Link>
        </li>
      </ul>
      <TodoListContainer />
      <TodoFormContainer />
    </div>
  );
}
