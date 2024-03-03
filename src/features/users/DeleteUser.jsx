import useDeleteUser from "./useDeleteUser";
import styled from "styled-components";

import SpinnerMini from "../../ui/SpinnerMini";
import DeleteButton from "../../ui/DeleteStyled";
import Modal from "../../ui/Modal";
import ConfirmDelete from "../../ui/ConfirmDelete";

function DeleteUser({ id }) {
  const { deleteUser, isLoading } = useDeleteUser();
  function handleDelete() {
    deleteUser(id);
  }
  return (
    <Modal>
      <Modal.Window openName="delete-user">
        <ConfirmDelete onConfirm={handleDelete} disabled={isLoading} resourceName={"user"} />
      </Modal.Window>
      <Modal.Open name="delete-user">
        <DeleteButton />
      </Modal.Open>
    </Modal>
  );
}

export default DeleteUser;
