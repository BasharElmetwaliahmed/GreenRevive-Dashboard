import useDeleteUser from "./useDeleteUser"
import styled from "styled-components";

import { FaRegTrashCan } from "react-icons/fa6";
import SpinnerMini from "../../ui/SpinnerMini";
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
function DeleteUser({id}) {
    const { deleteUser  , isDeleting} = useDeleteUser();
   function handleDelete(){
        if(confirm('are you sure you want to delete')){
            deleteUser(id)
        }
    }
    if(isDeleting) return <SpinnerMini/>;
  return (
    <DeleteStyled onClick={handleDelete}>
      <FaRegTrashCan />
    </DeleteStyled>
  );
}

export default DeleteUser