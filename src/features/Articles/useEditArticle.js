import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateArticleApi } from '../../services/apiArticles';
import toast from "react-hot-toast";

function useEditArticle() {
  const queryClient = useQueryClient();
  const { mutate: updateArticle,isPending: isLoading } = useMutation({
    mutationFn: (data) => updateArticleApi(data),
    onSuccess: () => {
      toast.success("Article Edited Successfully");
      queryClient.invalidateQueries({
        queryKey: ["articles"],
      });
    },
  });
  
  return { updateArticle, isLoading };
}

export default useEditArticle