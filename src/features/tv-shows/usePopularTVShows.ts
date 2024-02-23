import { useQuery } from "@tanstack/react-query";
import { getPopularTVShows } from "../../services/tv-shows";
import { useSearchParams } from "react-router-dom";

export function usePopularTVShows() {
  const [searchParams] = useSearchParams();
  const curPage = !searchParams.get("page")
    ? 1
    : Number(searchParams.get("page"));
  const { data: popularTVShows, isLoading } = useQuery({
    queryKey: ["tv-shows0", "popular", curPage],
    queryFn: () => getPopularTVShows(curPage),
  });
  return { popularTVShows, isLoading };
}
