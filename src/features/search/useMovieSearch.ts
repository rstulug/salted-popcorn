import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import { getSearchMovies } from "../../services/movies";

export function useMovieSearch() {
  const [searchParams] = useSearchParams();
  const curPage = !searchParams.get("page")
    ? 1
    : Number(searchParams.get("page"));

  const searhQuery = !searchParams.get("search")
    ? ""
    : searchParams.get("search");
  const {
    data: searchedMovies,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["movie", "search", curPage, searhQuery],
    queryFn: () => getSearchMovies(searhQuery, curPage),
  });

  return { searchedMovies, isLoading, error };
}
