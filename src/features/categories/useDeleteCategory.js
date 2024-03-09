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
    },
    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: ["categories"],
      });
    },
    onError: (err) => {
      alert(err.message);
    },
  });
  const { mutate, isIdle } = mutation;


  return { deleteCategory: mutate, isLoading: isIdle == false };
}

export default useDeleteCategory;
