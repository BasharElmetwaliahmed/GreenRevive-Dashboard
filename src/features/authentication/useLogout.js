import { useQueryClient, useMutation } from "@tanstack/react-query";
import { logoutApi } from "../../services/apiAuth";
import useCurrentUser from "./useCurrentUser";
import {useNavigate} from 'react-router-dom'
import toast from "react-hot-toast";

function useLogout() {
  const { user } = useCurrentUser();
  
  const navigate =useNavigate()
  const queryClient = useQueryClient()
  const { mutate: logOut, isLoading } = useMutation({
    mutationFn: () => logoutApi(user.token),
    onSuccess: ()=>{
      toast.success('logged out successfully')
        localStorage.removeItem('user');
        queryClient.removeQueries({queryKey: ['user'], exact: true });
        navigate('/login')
      }
  });
  return {logOut,isLoading};
}

export default useLogout;
