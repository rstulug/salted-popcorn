import { useQuery } from "@tanstack/react-query";
import { getTopRatedMovies } from "../../services/movies";
import { useSearchParams } from "react-router-dom";

export function useTopRatedMovies() {
  const [searchParams] = useSearchParams();
  const curPage = !searchParams.get("page")
    ? 1
    : Number(searchParams.get("page"));
  const { data: topRatedMovies, isLoading } = useQuery({
    queryKey: ["movies", "top-rated", curPage],
    queryFn: () => getTopRatedMovies(curPage),
  });

  return { topRatedMovies, isLoading };
}
