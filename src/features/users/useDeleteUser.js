import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteUserApi } from "../../services/apiUser";

function useDeleteUser() {
  const queryClient = useQueryClient();
  const { mutate: deleteUser, isLoading: isDeleting } = useMutation({
    mutationFn: (id) => {
      deleteUserApi(id);
    },
    onSuccess: () => {
      console.log("User deleted Successfully");
      queryClient.invalidateQueries({
        queryKey: ["users"],
      });
    },
    onError: (err) => {
      alert(err.message);
    },
  });

  return { deleteUser, isDeleting };
}

export default useDeleteUser;
