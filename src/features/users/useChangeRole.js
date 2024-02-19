import { useMutation, useQueryClient } from "@tanstack/react-query";
import { changeUserRoleApi } from "../../services/apiUser";

function useChangeRole() {
  const queryClient=useQueryClient()
  const { mutate: changeRole, isLoading } = useMutation({
    mutationFn: (data) => changeUserRoleApi(data),
    onSuccess: () => {
      console.log("role changed successfully");
            queryClient.invalidateQueries({
              queryKey: ["users"],
            });
    },
  });
  return { changeRole, isLoading };
}

export default useChangeRole;
