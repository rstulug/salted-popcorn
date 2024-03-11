import { useQuery } from "@tanstack/react-query";

import { useSearchParams } from "react-router-dom";
import { getDiscoverTVShows } from "../../services/tv-shows";

export function useDiscoverTVShows() {
  const [searchParams] = useSearchParams();

  let query = "";

  for (const entry of searchParams.entries()) {
    if (entry[0] !== "page") query += `&${entry[0]}=${entry[1]}`;
  }

  const curPage = !searchParams.get("page")
    ? 1
    : Number(searchParams.get("page"));

  const {
    data: discoveredTVShows,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["tv-show", "discover", query, curPage],
    queryFn: () => getDiscoverTVShows(query, curPage),
  });

  return { discoveredTVShows, isLoading, error };
}
