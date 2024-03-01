import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getTopRatedMovies } from "../../services/movies";
import { useSearchParams } from "react-router-dom";

export function useTopRatedMovies() {
  const [searchParams] = useSearchParams();
  const queryClient = useQueryClient();
  const curPage = !searchParams.get("page")
    ? 1
    : Number(searchParams.get("page"));
  const { data: topRatedMovies, isLoading } = useQuery({
    queryKey: ["movies", "top-rated", curPage],
    queryFn: () => getTopRatedMovies(curPage),
  });

  //Prefetching

  const totalPages = topRatedMovies?.total_pages;

  if (curPage < totalPages) {
    queryClient.prefetchQuery({
      queryKey: ["movies", "top-rated", curPage + 1],
      queryFn: () => getTopRatedMovies(curPage + 1),
    });
  }

  if (curPage > 1) {
    queryClient.prefetchQuery({
      queryKey: ["movies", "top-rated", curPage - 1],
      queryFn: () => getTopRatedMovies(curPage - 1),
    });
  }

  return { topRatedMovies, isLoading };
}
