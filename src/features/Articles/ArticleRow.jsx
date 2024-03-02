import {styled} from 'styled-components';
import Modal from '../../ui/Modal';
import Table from "../../ui/Table";
import { BASE_URL } from "../../utils/constants";
import DeleteArticle from './DeleteArticle';
import UpdateArticle from './UpdateArticle';
import EditButton from "../../ui/EditButton";

const  MASTER_IMG = styled.img`
  width: 70px;
  margin: auto;
`;
const StyledBox = styled.div`
  display: flex;
  gap: 1.2rem;
  justify-content: center;
`;

function ArticleRow({article}) {
  const  {id,master_image,title}= article; 
  return (
    <Table.Row>
      <div>{id}</div>
      <div>{title}</div>

      <MASTER_IMG src={`${BASE_URL}/${master_image}`} />
      <StyledBox>
        <Modal>
          <Modal.Window openName="edit-article">
            <UpdateArticle id={id} />
          </Modal.Window>
          <Modal.Open name="edit-article">
            <EditButton />
          </Modal.Open>
        </Modal>
        <DeleteArticle id={id} />
      </StyledBox>
    </Table.Row>
  );
}

export default ArticleRow