import { useQuery } from "@tanstack/react-query";
import { getonTVShows } from "../../services/tv-shows";

export function useOnTVShows() {
  const { data: onTVShows, isLoading } = useQuery({
    queryKey: ["tv-shows", "on-tv"],
    queryFn: getonTVShows,
  });
  return { onTVShows, isLoading };
}
