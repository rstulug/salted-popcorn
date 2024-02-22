import { useQuery } from "@tanstack/react-query";
import { getAiringTodayTVShows } from "../../services/tv-shows";

export function useAiringTodayTVShows() {
  const { data: airingTodayTVShows, isLoading } = useQuery({
    queryKey: ["tv-shows", "airing-today"],
    queryFn: getAiringTodayTVShows,
  });
  return { airingTodayTVShows, isLoading };
}
