import { useQuery } from "@tanstack/react-query";
import { getTopRatedTVShows } from "../../services/tv-shows";

export function useTopRatedTVShows() {
  const { data: topRatedTVShows, isLoading } = useQuery({
    queryKey: ["tv-shows", "top-rated"],
    queryFn: getTopRatedTVShows,
  });
  return { topRatedTVShows, isLoading };
}
