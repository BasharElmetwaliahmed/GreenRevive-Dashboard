import { useState } from "react";
import ConfirmEdit from "../../ui/ConfirmEdit";
import Modal from "../../ui/Modal";
import { objectToFormData } from "../../utils/helpers";
import useChangeRole from "./useChangeRole";
import EditButton from "../../ui/EditButton";
import { toast } from "react-hot-toast";
import {  useQueryClient } from "@tanstack/react-query";



function ChangeUser({ id, value }) {
  const [currentRole, setCurrentRole] = useState(value);
  const queryClient = useQueryClient();

  const { changeRole, isLoading } = useChangeRole();
  function submitChange(onCloseModal) {
    changeRole(
      { body: objectToFormData({ role: currentRole }), id },
      {
        onSuccess: () => {
          toast.success("user role updated successfully");
          queryClient.invalidateQueries({
            queryKey: ["users"],
          });
          onCloseModal();
        },
      }
    );
  }
  function changeHandler(e) {
    setCurrentRole(e.target.value);
  }

  return (
    <div>
      <Modal>
        <Modal.Window openName="change-role">
          <ConfirmEdit
            onConfirm={submitChange}
            onChange={changeHandler}
            disabled={isLoading}
            resourceName={"User role"}
            currentRole={currentRole}
          />
        </Modal.Window>
        <Modal.Open name="change-role">
          <EditButton />
        </Modal.Open>
      </Modal>
    </div>
  );
}

export default ChangeUser;
