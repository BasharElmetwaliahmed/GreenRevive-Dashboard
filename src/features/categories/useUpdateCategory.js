import { useMutation, useQueryClient } from "@tanstack/react-query";
import {  updateCategoryApi } from "../../services/apiCategories";

function useUpdateCategory() {
  const queryClient = useQueryClient();
  const { mutate: updateCategory, isPending } = useMutation({
    mutationFn: (data) => updateCategoryApi(data),

  });
  return { updateCategory, isPending };
}

export default useUpdateCategory;
