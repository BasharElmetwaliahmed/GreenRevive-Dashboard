import { useMutation, useQueryClient } from "@tanstack/react-query";
import {  updateCategoryApi } from "../../services/apiCategories";

function useUpdateCategory() {
  const queryClient = useQueryClient();
  const { mutate: updateCategory, isLoading } = useMutation({
    mutationFn: (data) => updateCategoryApi(data),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["categories"],
      });
    },
  });
  return { updateCategory, isLoading };
}

export default useUpdateCategory;
