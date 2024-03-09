import ConfirmDelete from "../../ui/ConfirmDelete";
import DeleteButton from "../../ui/DeleteStyled";
import Modal from "../../ui/Modal";
import SpinnerMini from "../../ui/SpinnerMini";
import useDeleteCategory from "./useDeleteCategory";

function DeleteCategory({ id }) {
  const { deleteCategory, isLoading } = useDeleteCategory();
  function handleDelete() {
    deleteCategory(id);
  }
  return (
    <>
      <Modal.Window openName="delete-category">
        <ConfirmDelete
          onConfirm={handleDelete}
          resourceName={"category"}
          disabled={isLoading}
        />
      </Modal.Window>
      <Modal.Open name="delete-category">
        <DeleteButton />
      </Modal.Open>
    </>
  );
}

export default DeleteCategory;
