import { useMutation } from "@tanstack/react-query"
import { loginApi } from "../../services/apiAuth";
import {useQueryClient} from '@tanstack/react-query'
import {useNavigate} from 'react-router-dom'
import toast from "react-hot-toast";
function useLogin() {
  const queryClient =useQueryClient()
  const navigate = useNavigate()

  const {  mutate : login, isLoading } = useMutation({
    mutationFn:(data)=>loginApi(data),
    onSuccess:(data)=>{
      toast.success('logged in successfully')
      queryClient.setQueryData(["user"], data.user);
      localStorage.setItem("user",JSON.stringify(data.user));

      navigate('/')
    }

  });

  return {login,isLoading}
}

export default useLogin