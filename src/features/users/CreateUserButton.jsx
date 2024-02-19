import Button from "../../ui/Button";
import { IoPersonAddOutline } from "react-icons/io5";
import ButtonIcon from "../../ui/ButtonIcon";
import styled from "styled-components";
import Modal from "../../ui/Modal";
import CreateUserForm from "./CreateUser";
import Search from "../../ui/Search";
const StyledHeader = styled.div`
  display:flex;
  justify-content: space-between;
  align-items: center;
`;
function CreateUserButton() {
  return (
    <>
      <StyledHeader>
        <Search/>
        <Modal>
          <Modal.Open name='create-user'>
            <Button>Create New User</Button>
          </Modal.Open>
          <Modal.Window openName='create-user'> 
            <CreateUserForm />
          </Modal.Window>
        </Modal>
      </StyledHeader>
    </>
  );
}

export default CreateUserButton;
