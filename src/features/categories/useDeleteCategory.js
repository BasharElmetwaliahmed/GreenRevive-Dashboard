import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteCategoryApi } from "../../services/apiCategories";
import { toast } from "react-hot-toast";
function useDeleteCategory() {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (id) => {
      deleteCategoryApi(id);
    },
    onSuccess: () => {
      toast.success("Category deleted Successfully");
      queryClient.invalidateQueries({
        queryKey: ["categories"],
      });
    },
    onError: (err) => {
      alert(err.message);
    },
  });
  const { mutate, isLoading } = mutation;

  console.log(mutation.isLoading);

  return { deleteCategory: mutate, isDeleting: isLoading };
}

export default useDeleteCategory;
