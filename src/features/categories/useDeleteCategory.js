import { useMutation, useQueryClient } from "@tanstack/react-query"
import { deleteCategoryApi } from "../../services/apiCategories";

function useDeleteCategory() {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (id) => {
      deleteCategoryApi(id);
    },
    onSuccess: () => {
      console.log("Category deleted Successfully");
      queryClient.invalidateQueries({
        queryKey: ["categories"],
      });
    },
    onError: (err) => {
      alert(err.message);
    },
  });
  return {deleteCategory:mutation.mutate}
}

export default useDeleteCategory