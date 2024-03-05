import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getUpcomingMovies } from "../../services/movies";
import { useSearchParams } from "react-router-dom";

export function useUpcomingMovies() {
  const [searchParams] = useSearchParams();
  const queryClient = useQueryClient();
  const curPage = !searchParams.get("page")
    ? 1
    : Number(searchParams.get("page"));
  const {
    data: upcomingMovies,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["movies", "up-coming", curPage],
    queryFn: () => getUpcomingMovies(curPage),
  });

  //Prefetching

  const totalPages = upcomingMovies?.total_pages;

  if (curPage < totalPages) {
    queryClient.prefetchQuery({
      queryKey: ["movies", "up-coming", curPage + 1],
      queryFn: () => getUpcomingMovies(curPage + 1),
    });
  }

  if (curPage > 1) {
    queryClient.prefetchQuery({
      queryKey: ["movies", "up-coming", curPage - 1],
      queryFn: () => getUpcomingMovies(curPage - 1),
    });
  }
  return { upcomingMovies, isLoading, error };
}
