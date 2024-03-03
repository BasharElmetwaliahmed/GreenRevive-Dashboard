import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createCategoryApi } from "../../services/apiCategories";

function useCreateCategory() {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (data) => createCategoryApi(data),

  });
  const { mutate: createNewCategory, isPending } = mutation;


  return { createNewCategory, isLoading:isPending };
}

export default useCreateCategory;
