import { useQuery } from "@tanstack/react-query";
import { getUserApi } from "../../services/apiUser";
import { useSearchParams } from "react-router-dom";
import { objectToFormData } from "../../utils/helpers";

function useUsers() {
  const [searchParams] = useSearchParams();
  const search = searchParams.get("search");
  const page =searchParams.get("page");
  const searchForm = search ? objectToFormData({ key_word: search }) : null;

  const { data: users, isLoading } = useQuery({
    queryKey: ["users", search,page],
    queryFn: () => {
      return getUserApi(searchForm,page);
    },
  });

  return { users, isLoading };
}

export default useUsers;
