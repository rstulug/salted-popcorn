import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import { getNowPlayingMovies } from "../../services/movies";

export function useNowPlayingMovies() {
  const [searchParams] = useSearchParams();
  const queryClient = useQueryClient();
  const curPage = !searchParams.get("page")
    ? 1
    : Number(searchParams.get("page"));

  const { data: nowPlayingMovies, isLoading } = useQuery({
    queryKey: ["movies", "now-playing", curPage],
    queryFn: () => getNowPlayingMovies(curPage),
  });

  //Prefetching

  const totalPages = nowPlayingMovies?.total_pages;

  if (curPage < totalPages) {
    queryClient.prefetchQuery({
      queryKey: ["movies", "now-playing", curPage + 1],
      queryFn: () => getNowPlayingMovies(curPage + 1),
    });
  }

  if (curPage > 1) {
    queryClient.prefetchQuery({
      queryKey: ["movies", "now-playing", curPage - 1],
      queryFn: () => getNowPlayingMovies(curPage - 1),
    });
  }
  return { nowPlayingMovies, isLoading };
}
