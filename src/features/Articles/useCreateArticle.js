import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createNewArticle } from "../../services/apiArticles";

function useCreateArticle() {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (data) => createNewArticle(data),
    onSuccess: () => {
      toast.success("Article Created Successfully");
    },
  });
  const { mutate: createArticle, isLoading } = mutation;

  return { createArticle, isLoading };
}

export default useCreateArticle;
