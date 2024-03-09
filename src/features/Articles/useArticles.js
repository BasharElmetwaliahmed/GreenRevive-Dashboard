import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getArticles } from "../../services/apiArticles";
import { useSearchParams } from "react-router-dom";

function useArticles() {
  const [searchParams] = useSearchParams();
  const page = searchParams.get("page") * 1 || 1;
  const queryClient = useQueryClient();
  const { data: articles, isLoading } = useQuery({
    queryKey: ["articles", page],
    queryFn: () => {
      return getArticles(page);
    },
  });

  if (articles && page * 10 < articles?.total) {
    queryClient.prefetchQuery({
      queryKey: ["users", search, page + 1],
      queryFn: () => getUserApi(search, page + 1),
    });
  }
  if (articles && page * 10 > 10) {
    queryClient.prefetchQuery({
      queryKey: ["users", search, page - 1],
      queryFn: () => getUserApi(search, page - 1),
    });
  }
  return { articles, isLoading };
}

export default useArticles;
