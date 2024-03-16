import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { changePasswordApi } from "../../services/apiAccountSettings";
function useChangePassword() {
  const queryClient = useQueryClient();
  const navigate = useNavigate()
  const { mutate: changePassword, isPending: isLoading } = useMutation({
    mutationFn: (data) => changePasswordApi(data),
    onSuccess: () => {
      toast.success("password changed  successfully");
      navigate("/");
    },
  });
  return { changePassword, isLoading };
}

export default useChangePassword;
