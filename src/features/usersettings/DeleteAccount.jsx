import { TiUserDeleteOutline } from "react-icons/ti";
import styled from "styled-components";
import ConfirmDelete from "../../ui/ConfirmDelete";
import Modal from "../../ui/Modal";
import useDeleteAccount from "./useDeleteAccount";

const DeleteAccountButton = styled.button`
  background-color: red;
  padding: 1.5rem 2.7rem;
  border-radius: 0.7rem;
  color: white;
  display: flex;
  gap: 0.5rem;
  align-items: center;
  border: none;
  font-size: 1.8rem;
  font-weight: 700;
`;
function DeleteAccount() {
    const {deleteAccount,isLoading} =useDeleteAccount()
  return (
    <Modal>
      <Modal.Open>
        <DeleteAccountButton>
          <TiUserDeleteOutline />
          Delete Account
        </DeleteAccountButton>
      </Modal.Open>
      <Modal.Window>
        <ConfirmDelete
          resourceName="user"
          onConfirm={deleteAccount}
          disabled={isLoading}
        />
      </Modal.Window>
    </Modal>
  );
}

export default DeleteAccount;
