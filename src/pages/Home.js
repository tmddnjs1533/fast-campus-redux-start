import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { push } from "connected-react-router";

export default function Home() {
  const dispatch = useDispatch();
  const click = () => {
    dispatch(push("/todos"));
  };
  return (
    <div>
      <h1>Home</h1>
      <ul>
        <li>
          <Link to="/todos">todos</Link>
        </li>
        <li>
          <Link to="/users">users</Link>
        </li>
      </ul>
      <button onClick={click}>todos로 이동</button>
    </div>
  );
}
