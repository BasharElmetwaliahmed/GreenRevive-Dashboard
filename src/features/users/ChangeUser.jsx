import { useState } from "react";
import Select from "../../ui/Select";
import { objectToFormData } from "../../utils/helpers";
import useChangeRole from "./useChangeRole";

function ChangeUser({ id, value }) {
  const [currentRole, setCurrentRole] = useState(value);
  const { changeRole, isLoading } = useChangeRole();
  function changeHandler(e) {
    if (confirm("are you sure you want to change role")) {
      setCurrentRole(e.target.value);

      changeRole({body:objectToFormData({ role: e.target.value }), id});
    }
  }
  return (
    <div>
      <Select
        options={[
          { value: "admin", label: "Admin" },
          { value: "coordinator", label: "Coordinator" },
          { value: "user", label: "User" },
        ]}
        value={currentRole}
        onChange={changeHandler}
      />
    </div>
  );
}

export default ChangeUser;
