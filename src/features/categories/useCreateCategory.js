import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createCategoryApi } from "../../services/apiCategories";

function useCreateCategory() {
      const queryClient = useQueryClient();
      const { mutate: createNewCategory, isLoading } = useMutation({
        mutationFn: (data) => createCategoryApi(data),
        onSuccess: () => {
          queryClient.invalidateQueries({
            queryKey: ["categories"],
          });
        },
      });
  return {createNewCategory, isLoading};
}

export default useCreateCategory