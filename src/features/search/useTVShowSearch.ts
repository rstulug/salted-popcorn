import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import { getSearchTVShows } from "../../services/tv-shows";

export function useTVShowSearch() {
  const [searchParams] = useSearchParams();
  const curPage = !searchParams.get("page")
    ? 1
    : Number(searchParams.get("page"));

  const searhQuery = !searchParams.get("search")
    ? ""
    : searchParams.get("search");
  const {
    data: searchedTVShows,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["tv-show", "search", curPage, searhQuery],
    queryFn: () => getSearchTVShows(searhQuery, curPage),
  });

  return { searchedTVShows, isLoading, error };
}
