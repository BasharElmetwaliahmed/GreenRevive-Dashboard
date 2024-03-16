import Empty from "../../ui/Empty";
import Pagination from "../../ui/Pagination";
import Spinner from "../../ui/Spinner";
import Table from "../../ui/Table";
import UserRow from "./UserRow";
import useUsers from "./useUsers";

function UsersTable() {
  const { users, isLoading } = useUsers();
  if (isLoading) return <Spinner />;
  if(!users.data) return <Empty  resource={'Users'}/>;
  return (
    <>
      <Table columns={"0.6fr 1.8fr 2.2fr 1fr 2fr "}>
        <Table.Header>
          <th>id</th>
          <th>name</th>
          <th>email</th>
          <th>role</th>
          <th>options</th>
        </Table.Header>
        <Table.Body
          data={users.data}
          render={(user) => <UserRow key={user.id} user={user} />}
        />
        <Table.Footer>
          {users.count && <Pagination count={users.count} />}
        </Table.Footer>
      </Table>
    </>
  );
}

export default UsersTable;
