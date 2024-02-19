import Spinner from "../../ui/Spinner";
import ChangeUser from "./ChangeUser";
import DeleteUser from "./DeleteUser";
import useUsers from "./useUsers";

function UsersList() {
  const { users ,isLoading } = useUsers();
  if(isLoading) return <Spinner/>
  return (
    <div>
      <ul>
        {users &&users.map((user) => (
          <li key={user.id}>
            <h1>{user.name}</h1>
            <p>{user.email}</p>
            <p>{user.role}</p>
            <DeleteUser id={user.id} />
            <ChangeUser id={user.id} value={user.role}/>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UsersList;
