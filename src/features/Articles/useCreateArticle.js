import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { createNewArticle } from "../../services/apiArticles";
import {toast} from 'react-hot-toast'
function useCreateArticle() {
  const queryClient = useQueryClient();
  const navigate= useNavigate()
  const mutation = useMutation({
    mutationFn: (data) => createNewArticle(data),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["articles"],
      });   
         toast.success("Article Created Successfully");
      navigate('/articles');

    },
  });
  const { mutate: createArticle, isLoading } = mutation;

  return { createArticle, isLoading };
}

export default useCreateArticle;
