import DeleteButton from "../../ui/DeleteStyled";
import SpinnerMini from "../../ui/SpinnerMini";
import useDeleteCategory from "./useDeleteCategory";

function DeleteCategory({ id }) {
  const { deleteCategory, isDeleting } = useDeleteCategory();
  function handleDelete() {
    if (confirm("are you sure you want to delete")) {
      deleteCategory(id);
    }
  }
  return (
    <>
      {!isDeleting ? <DeleteButton onClick={handleDelete} /> : <SpinnerMini />}
    </>
  );
}

export default DeleteCategory;
