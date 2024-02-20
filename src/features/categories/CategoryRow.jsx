import styled from "styled-components";
import { BASE_URL } from "../../utils/constants";
import Table from "../../ui/Table";
import DeleteButton from "../../ui/DeleteStyled";
import DeleteCategory from "./DeleteCategory";
import EditButton from "../../ui/EditButton";
import Modal from "../../ui/Modal";
import CreateEditCategoryForm from "./CreateEditCategory";

const IconStyled = styled.img`
  width: 70px;
  margin: auto;
`;
const StyledBox = styled.div`
  display: flex;
  gap: 1.2rem;
  justify-content: center;
`;

const EditStyled = styled.button`
  color: var(--color-grey-0);
  width: fit-content;
  background-color: blue;
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
function CategoryRow({ category }) {
  const { id, name, icon  ,description} = category;
  return (
    <Table.Row>
      <div>{id}</div>
      <IconStyled src={`${BASE_URL}/${icon}`} />
      <div>{name}</div>
      <StyledBox>
        <Modal>
          <Modal.Window openName="edit-category">
            <CreateEditCategoryForm edit={{name,description,icon,id}} />
          </Modal.Window>
          <Modal.Open name="edit-category">
            <EditButton />
          </Modal.Open>
        </Modal>
        <DeleteCategory id={id} />
      </StyledBox>
    </Table.Row>
  );
}

export default CategoryRow;
