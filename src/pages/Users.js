import { Link } from "react-router-dom";
import UserListContainer from "../containers/UserListContainer";

export default function Users() {
  return (
    <div>
      <h1>Users</h1>
      <ul>
        <li>
          <Link to="/">home</Link>
        </li>
        <li>
          <Link to="/todos">todos</Link>
        </li>
      </ul>
      <UserListContainer />
    </div>
  );
}
