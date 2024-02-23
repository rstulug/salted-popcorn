import { useQuery } from "@tanstack/react-query";
import { getPopularMovies } from "../../services/movies";
import { useSearchParams } from "react-router-dom";

export function usePopularMovies() {
  const [searchParams] = useSearchParams();
  const curPage = !searchParams.get("page")
    ? 1
    : Number(searchParams.get("page"));
  const { data: popularMovies, isLoading } = useQuery({
    queryKey: ["movies", "popular", curPage],
    queryFn: () => getPopularMovies(curPage),
  });
  return { popularMovies, isLoading };
}
