import { useMutation } from "@tanstack/react-query";
import { changeUserRoleApi } from "../../services/apiUser";

function useChangeRole() {
  const { mutate: changeRole, isPending } = useMutation({
    mutationFn: (data) => changeUserRoleApi(data),

  });
  return { changeRole, isLoading :isPending};
}

export default useChangeRole;
