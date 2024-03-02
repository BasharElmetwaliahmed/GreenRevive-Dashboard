import { useQuery } from "@tanstack/react-query";
import { getArticles } from "../../services/apiArticles";
import { useSearchParams } from "react-router-dom";

function useArticles() {
  const [searchParams] = useSearchParams();
  const page = searchParams.get("page") || 1;

  const { data: articles, isLoading } = useQuery({
    queryKey: ["articles", page],
    queryFn: () => {
      return getArticles(page);
    },
  });
  return { articles, isLoading };
}

export default useArticles;
