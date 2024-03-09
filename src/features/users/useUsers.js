import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getUserApi } from "../../services/apiUser";
import { useSearchParams } from "react-router-dom";
import { objectToFormData } from "../../utils/helpers";

function useUsers() {
  const [searchParams] = useSearchParams();
  const queryClient = useQueryClient();
  const search = searchParams.get("search");
  const page = searchParams.get("page") * 1;
  const searchForm = search ? objectToFormData({ key_word: search }) : null;

  const { data: users, isLoading } = useQuery({
    queryKey: ["users", search, page],
    queryFn: () => {
      return getUserApi(searchForm, page);
    },
  });
  if (users && page * 10 < users?.count) {
    queryClient.prefetchQuery({
      queryKey: ["users", search, page + 1],
      queryFn: () => getUserApi(search, page + 1),
    });
  }
    if (users && page * 10 >10) {
      queryClient.prefetchQuery({
        queryKey: ["users", search, page - 1],
        queryFn: () => getUserApi(search, page - 1),
      });
    }

  return { users, isLoading };
}

export default useUsers;
