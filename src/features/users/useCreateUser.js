import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createUserApi } from "../../services/apiUser";
import { toast } from "react-hot-toast";
function useCreateUser() {
  const queryClient = useQueryClient();
  const { mutate: createNewUser, isPending: isLoading } = useMutation({
    mutationFn: (data, token) => createUserApi(data, token),
    onSuccess: () => {
      toast.success("user created successfully");
      queryClient.invalidateQueries({
        queryKey: ["users"],
      });
    },
  });
  return { createNewUser, isLoading };
}

export default useCreateUser;
