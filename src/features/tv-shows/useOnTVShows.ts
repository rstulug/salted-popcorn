import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getonTVShows } from "../../services/tv-shows";
import { useSearchParams } from "react-router-dom";

export function useOnTVShows() {
  const [searchParams] = useSearchParams();
  const queryClient = useQueryClient();
  const curPage = !searchParams.get("page")
    ? 1
    : Number(searchParams.get("page"));
  const {
    data: onTVShows,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["tv-shows", "on-tv", curPage],
    queryFn: () => getonTVShows(curPage),
  });

  //Prefetching

  const totalPages = onTVShows?.total_pages;

  if (curPage < totalPages) {
    queryClient.prefetchQuery({
      queryKey: ["tv-shows", "on-tv", curPage + 1],
      queryFn: () => getonTVShows(curPage + 1),
    });
  }

  if (curPage > 1) {
    queryClient.prefetchQuery({
      queryKey: ["tv-shows", "on-tv", curPage - 1],
      queryFn: () => getonTVShows(curPage - 1),
    });
  }
  return { onTVShows, isLoading, error };
}
