import useDeleteUser from "./useDeleteUser";
import styled from "styled-components";

import SpinnerMini from "../../ui/SpinnerMini";
import DeleteButton from "../../ui/DeleteStyled";
import Modal from "../../ui/Modal";
import ConfirmDelete from "../../ui/ConfirmDelete";

function DeleteUser({ id }) {
  const { deleteUser, isDeleting } = useDeleteUser();
  function handleDelete() {
    deleteUser(id);
  }
  if (isDeleting) return <SpinnerMini />;
  return (
    <Modal>
      <Modal.Window openName="delete-user">
        <ConfirmDelete onConfirm={handleDelete} resourceName={"user"} />
      </Modal.Window>
      <Modal.Open name="delete-user">
        <DeleteButton onClick={handleDelete} />
      </Modal.Open>
    </Modal>
  );
}

export default DeleteUser;
