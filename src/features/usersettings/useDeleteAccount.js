import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { deleteAccount } from "../../services/apiAccountSettings";

function useDeleteAccount() {
  const navigate = useNavigate();
  const mutation = useMutation({
    mutationFn: () => {
      deleteAccount();
    },
    onSuccess: () => {
      toast.success("Account deleted Successfully");
      localStorage.removeItem("user");
      navigate("/login");
    },

    onError: (err) => {
      alert(err.message);
    },
  });
  const { mutate, isIdle } = mutation;

  return { deleteAccount: mutate, isLoading: isIdle == false };
}

export default useDeleteAccount;
