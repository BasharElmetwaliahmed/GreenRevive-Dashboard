import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteUserApi } from "../../services/apiUser";
import toast from "react-hot-toast";

function useDeleteUser() {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (id) => {
      deleteUserApi(id);
    },
    onSuccess: () => {
      toast.success("User deleted Successfully");
      queryClient.invalidateQueries({
        queryKey: ["users"],
      });
    },
    onError: (err) => {
      alert(err.message);
    },
  });

  const { mutate: deleteUser, isIdle } = mutation;

  return { deleteUser, isLoading: isIdle == false };
}

export default useDeleteUser;
