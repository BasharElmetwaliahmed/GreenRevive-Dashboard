import styled from "styled-components";
import { FaEdit } from "react-icons/fa";

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

function EditButton({onClick}) {
  return (
    <EditStyled onClick={onClick}>
      <FaEdit />
    </EditStyled>
  );
}

export default EditButton