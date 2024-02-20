import DeleteButton from "../../ui/DeleteStyled";
import useDeleteCategory from "./useDeleteCategory";

function DeleteCategory({id}) {
    const {deleteCategory} = useDeleteCategory()
       function handleDelete() {
         if (confirm("are you sure you want to delete")) {
           deleteCategory(id);
         }
       }
  return <DeleteButton onClick={handleDelete} />;
}

export default DeleteCategory