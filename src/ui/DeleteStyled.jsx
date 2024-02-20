import styled from "styled-components";
import { FaRegTrashCan } from "react-icons/fa6";

const DeleteStyled = styled.button`
  color: var(--color-grey-0);
  width: fit-content;
  background-color: red;
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
function DeleteButton({onClick}) {
  return (
    <DeleteStyled onClick={onClick}>
      <FaRegTrashCan />
    </DeleteStyled>
  );
}

export default DeleteButton