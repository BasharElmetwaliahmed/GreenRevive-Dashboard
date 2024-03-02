import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { deleteArticleApi } from "../../services/apiArticles";

function useDeleteArticle() {
  const queryClient = useQueryClient();
  const { mutate: deleteArticle } = useMutation({
    mutationFn: (id) => {
      deleteArticleApi(id);
    },
    onSuccess: (data) => {
        console.log(data)
      toast.success("Article deleted Successfully");
      queryClient.invalidateQueries({
        queryKey: ["articles"],
      });
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { deleteArticle}
}

export default useDeleteArticle;
