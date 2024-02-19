import Table from "../../ui/Table";
import DeleteUser from "./DeleteUser";
import { FaEdit } from "react-icons/fa";
import styled from "styled-components";
import { useState } from "react";
import ChangeUser from "./ChangeUser";

const EditStyled = styled.button`
  color: var(--color-grey-0);
  width: fit-content;
  background-color: blue;
  border: none;
  border-radius: 0.7rem;
  font-size: 16px;
  font-weight: 500;
  padding: 0.8rem 1rem;
  transition: all 0.3s;
  &:hover {
    opacity: 0.5;
  }
`;
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
        <EditStyled onClick={() => setIsEdit(!isEdit)}>
          <FaEdit />
        </EditStyled>
        <DeleteUser id={id} />
      </StyledBox>
    </Table.Row>
  );
}

export default UserRow;
