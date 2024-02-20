import Button from "../../ui/Button"
import Modal from "../../ui/Modal"
import CreateEditCategoryForm from "./CreateEditCategory";

function CreateCategoryButton() {
  return (
    <Modal>
      <Modal.Window openName="create-category">
        <CreateEditCategoryForm />
      </Modal.Window>
      <Modal.Open name="create-category">
        <Button>Add New Category</Button>
      </Modal.Open>
    </Modal>
  );
}

export default CreateCategoryButton