import Table from "../../ui/Table";
import DeleteUser from "./DeleteUser";
import styled from "styled-components";
import ChangeUser from "./ChangeUser";


const StyledBox = styled.div`
  display: flex;
  gap: 1.2rem;
  justify-content: center;
`;
function UserRow({ user }) {
  const { id, name, role, email } = user;
  return (
    <Table.Row>
      <div>{id}</div>
      <div>{name}</div>
      <div>{email}</div>
      <div>{role}</div>
      <StyledBox>
        <ChangeUser value={role} id={id}  />
        <DeleteUser id={id} />
      </StyledBox>
    </Table.Row>
  );
}

export default UserRow;
