import useDeleteUser from "./useDeleteUser"
import styled from "styled-components";

import SpinnerMini from "../../ui/SpinnerMini";
import DeleteButton from "../../ui/DeleteStyled";

function DeleteUser({id}) {
    const { deleteUser  , isDeleting} = useDeleteUser();
   function handleDelete(){
        if(confirm('are you sure you want to delete')){
            deleteUser(id)
        }
    }
    if(isDeleting) return <SpinnerMini/>;
  return (
    <DeleteButton onClick={handleDelete} />
  );
}

export default DeleteUser