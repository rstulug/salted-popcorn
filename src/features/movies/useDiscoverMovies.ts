import { useQuery } from "@tanstack/react-query";
import { getDiscoverMovies } from "../../services/movies";
import { useSearchParams } from "react-router-dom";

export function useDiscoverMovies() {
  const [searchParams] = useSearchParams();

  let query = "";

  for (const entry of searchParams.entries()) {
    console.log(entry);
    if (entry[0] !== "page") query += `&${entry[0]}=${entry[1]}`;
  }

  const curPage = !searchParams.get("page")
    ? 1
    : Number(searchParams.get("page"));

  const {
    data: discoveredMovies,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["movies", "discover", query, curPage],
    queryFn: () => getDiscoverMovies(query, curPage),
  });

  return { discoveredMovies, isLoading, error };
}
