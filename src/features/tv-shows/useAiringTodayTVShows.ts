import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getAiringTodayTVShows } from "../../services/tv-shows";
import { useSearchParams } from "react-router-dom";

export function useAiringTodayTVShows() {
  const [searchParams] = useSearchParams();
  const queryClient = useQueryClient();
  const curPage = !searchParams.get("page")
    ? 1
    : Number(searchParams.get("page"));
  const {
    data: airingTodayTVShows,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["tv-shows", "airing-today", curPage],
    queryFn: () => getAiringTodayTVShows(curPage),
  });

  //Prefetching

  const totalPages = airingTodayTVShows?.total_pages;

  if (curPage < totalPages) {
    queryClient.prefetchQuery({
      queryKey: ["tv-shows", "airing-today", curPage + 1],
      queryFn: () => getAiringTodayTVShows(curPage + 1),
    });
  }

  if (curPage > 1) {
    queryClient.prefetchQuery({
      queryKey: ["tv-shows", "airing-today", curPage - 1],
      queryFn: () => getAiringTodayTVShows(curPage - 1),
    });
  }
  return { airingTodayTVShows, isLoading, error };
}
