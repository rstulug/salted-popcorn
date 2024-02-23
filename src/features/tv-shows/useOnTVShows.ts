import { useQuery } from "@tanstack/react-query";
import { getonTVShows } from "../../services/tv-shows";
import { useSearchParams } from "react-router-dom";

export function useOnTVShows() {
  const [searchParams] = useSearchParams();
  const curPage = !searchParams.get("page")
    ? 1
    : Number(searchParams.get("page"));
  const { data: onTVShows, isLoading } = useQuery({
    queryKey: ["tv-shows", "on-tv", curPage],
    queryFn: () => getonTVShows(curPage),
  });
  return { onTVShows, isLoading };
}
