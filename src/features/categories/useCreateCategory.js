import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createCategoryApi } from "../../services/apiCategories";

function useCreateCategory() {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (data) => createCategoryApi(data),
    onSuccess: () => {
      toast.success("Category Created Successfully");
      queryClient.invalidateQueries({
        queryKey: ["categories"],
      });
    },
  });
  const { mutate: createNewCategory, isLoading } = mutation;


  return { createNewCategory, isLoading };
}

export default useCreateCategory;
