import { useQuery } from "@tanstack/react-query";
import { getPopularTVShows } from "../../services/tv-shows";

export function usePopularTVShows() {
  const { data: popularTVShows, isLoading } = useQuery({
    queryKey: ["tv-shows0", "popular"],
    queryFn: getPopularTVShows,
  });
  return { popularTVShows, isLoading };
}
