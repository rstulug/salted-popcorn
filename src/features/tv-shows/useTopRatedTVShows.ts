import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getTopRatedTVShows } from "../../services/tv-shows";
import { useSearchParams } from "react-router-dom";

export function useTopRatedTVShows() {
  const [searchParams] = useSearchParams();
  const queryClient = useQueryClient();
  const curPage = !searchParams.get("page")
    ? 1
    : Number(searchParams.get("page"));
  const {
    data: topRatedTVShows,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["tv-shows", "top-rated", curPage],
    queryFn: () => getTopRatedTVShows(curPage),
  });

  //Prefetching

  const totalPages = topRatedTVShows?.total_pages;

  if (curPage < totalPages) {
    queryClient.prefetchQuery({
      queryKey: ["tv-shows", "top-rated", curPage + 1],
      queryFn: () => getTopRatedTVShows(curPage + 1),
    });
  }

  if (curPage > 1) {
    queryClient.prefetchQuery({
      queryKey: ["tv-shows", "top-rated", curPage - 1],
      queryFn: () => getTopRatedTVShows(curPage - 1),
    });
  }
  return { topRatedTVShows, isLoading, error };
}
