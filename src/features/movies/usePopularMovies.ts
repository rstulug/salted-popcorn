import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getPopularMovies } from "../../services/movies";
import { useSearchParams } from "react-router-dom";

export function usePopularMovies() {
  const [searchParams] = useSearchParams();
  const queryClient = useQueryClient();
  const curPage = !searchParams.get("page")
    ? 1
    : Number(searchParams.get("page"));
  const { data: popularMovies, isLoading } = useQuery({
    queryKey: ["movies", "popular", curPage],
    queryFn: () => getPopularMovies(curPage),
  });

  //Prefetching

  const totalPages = popularMovies?.total_pages;

  if (curPage < totalPages) {
    queryClient.prefetchQuery({
      queryKey: ["movies", "popular", curPage + 1],
      queryFn: () => getPopularMovies(curPage + 1),
    });
  }

  if (curPage > 1) {
    queryClient.prefetchQuery({
      queryKey: ["movies", "popular", curPage - 1],
      queryFn: () => getPopularMovies(curPage - 1),
    });
  }
  return { popularMovies, isLoading };
}
