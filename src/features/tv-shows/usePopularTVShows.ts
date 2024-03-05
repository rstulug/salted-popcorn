import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getPopularTVShows } from "../../services/tv-shows";
import { useSearchParams } from "react-router-dom";

export function usePopularTVShows() {
  const [searchParams] = useSearchParams();
  const queryClient = useQueryClient();
  const curPage = !searchParams.get("page")
    ? 1
    : Number(searchParams.get("page"));
  const {
    data: popularTVShows,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["tv-shows", "popular", curPage],
    queryFn: () => getPopularTVShows(curPage),
  });

  //Prefetching

  const totalPages = popularTVShows?.total_pages;

  if (curPage < totalPages) {
    queryClient.prefetchQuery({
      queryKey: ["tv-shows", "popular", curPage + 1],
      queryFn: () => getPopularTVShows(curPage + 1),
    });
  }

  if (curPage > 1) {
    queryClient.prefetchQuery({
      queryKey: ["tv-shows", "popular", curPage - 1],
      queryFn: () => getPopularTVShows(curPage - 1),
    });
  }

  return { popularTVShows, isLoading, error };
}
