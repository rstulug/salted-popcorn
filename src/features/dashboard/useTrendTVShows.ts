import { useQuery } from "@tanstack/react-query";
import { getTrendTVShows } from "../../services/tv-shows";

export function useTrendTVShows() {
  const { data: trendTVShows, isLoading } = useQuery({
    queryKey: ["tv-shows", "trending"],
    queryFn: getTrendTVShows,
  });

  return { trendTVShows, isLoading };
}
