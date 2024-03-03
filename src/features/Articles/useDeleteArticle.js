import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { deleteArticleApi } from "../../services/apiArticles";

function useDeleteArticle(id) {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (id) => {
      deleteArticleApi(id);
    },
    onSuccess: (data) => {
      toast.success("Article deleted Successfully");

    },
    onSettled:()=>{
            queryClient.invalidateQueries({
        queryKey: ["articles"],
      });
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  const { mutate: deleteArticle, isIdle } = mutation;
  return { deleteArticle,isLoading:isIdle==false };
}

export default useDeleteArticle;
