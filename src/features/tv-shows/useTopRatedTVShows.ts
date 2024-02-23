import { useQuery } from "@tanstack/react-query";
import { getTopRatedTVShows } from "../../services/tv-shows";
import { useSearchParams } from "react-router-dom";

export function useTopRatedTVShows() {
  const [searchParams] = useSearchParams();
  const curPage = !searchParams.get("page")
    ? 1
    : Number(searchParams.get("page"));
  const { data: topRatedTVShows, isLoading } = useQuery({
    queryKey: ["tv-shows", "top-rated", curPage],
    queryFn: () => getTopRatedTVShows(curPage),
  });
  return { topRatedTVShows, isLoading };
}
