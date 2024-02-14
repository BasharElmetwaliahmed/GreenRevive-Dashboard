import { useMutation ,useQueryClient } from "@tanstack/react-query";
import { createUserApi } from "../../services/apiUser";

function useCreateUser() {
  const queryClient = useQueryClient()
  const { mutate: createNewUser, isLoading } = useMutation({
    mutationFn: (data,token) => createUserApi(data,token),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["users"],
      });
    },

  });
  return { createNewUser, isLoading };
}

export default useCreateUser;
