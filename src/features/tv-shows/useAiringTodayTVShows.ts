import { useQuery } from "@tanstack/react-query";
import { getAiringTodayTVShows } from "../../services/tv-shows";
import { useSearchParams } from "react-router-dom";

export function useAiringTodayTVShows() {
  const [searchParams] = useSearchParams();
  const curPage = !searchParams.get("page")
    ? 1
    : Number(searchParams.get("page"));
  const { data: airingTodayTVShows, isLoading } = useQuery({
    queryKey: ["tv-shows", "airing-today", curPage],
    queryFn: () => getAiringTodayTVShows(curPage),
  });
  return { airingTodayTVShows, isLoading };
}
