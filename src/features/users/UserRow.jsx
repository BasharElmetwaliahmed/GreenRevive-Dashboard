import Table from "../../ui/Table";
import DeleteUser from "./DeleteUser";
import styled from "styled-components";
import { useState } from "react";
import ChangeUser from "./ChangeUser";
import EditButton from "../../ui/EditButton";


const StyledBox = styled.div`
  display: flex;
  gap: 1.2rem;
  justify-content: center;
`;
function UserRow({ user }) {
  const { id, name, role, email } = user;
  const [isEdit, setIsEdit] = useState();
  return (
    <Table.Row>
      <div>{id}</div>
      <div>{name}</div>
      <div>{email}</div>
      {isEdit ? <ChangeUser value={role} id={id} /> : <div>{role}</div>}
      <StyledBox>
        <EditButton onClick={() => setIsEdit(!isEdit)} />
        <DeleteUser id={id} />
      </StyledBox>
    </Table.Row>
  );
}

export default UserRow;
