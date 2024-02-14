import { useQueryClient, useMutation } from "@tanstack/react-query";
import { logoutApi } from "../../services/apiAuth";
import useCurrentUser from "./useCurrentUser";
import {useNavigate} from 'react-router-dom'

function useLogout() {
  const { user } = useCurrentUser();
  
  const navigate =useNavigate()
  const queryClient = useQueryClient()
  const { mutate: logOut, isLoading } = useMutation({
    mutationFn: () => logoutApi(user.token),
    onSuccess: ()=>{
        localStorage.clear();
        queryClient.removeQueries({queryKey: ['user'], exact: true });
        navigate('/login')
      }
  });
  return {logOut,isLoading};
}

export default useLogout;
