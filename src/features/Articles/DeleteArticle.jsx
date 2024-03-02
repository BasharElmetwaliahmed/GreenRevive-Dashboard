import ConfirmDelete from "../../ui/ConfirmDelete";
import DeleteButton from "../../ui/DeleteStyled";
import Modal from "../../ui/Modal";
import useDeleteArticle from "./useDeleteArticle";

function DeleteArticle({id}) {
  const { deleteArticle, isLoading } = useDeleteArticle(id);
  const handleDelete=()=>{
    deleteArticle(id)
  }
  return (
    <Modal>
      <Modal.Window openName="delete-article">
        <ConfirmDelete
          onConfirm={handleDelete}
          disabled={isLoading}
          resourceName={"article"}
        />
      </Modal.Window>
      <Modal.Open name="delete-article">
        <DeleteButton />
      </Modal.Open>
    </Modal>
  );
}

export default DeleteArticle;
