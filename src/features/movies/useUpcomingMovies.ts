import { useQuery } from "@tanstack/react-query";
import { getUpcomingMovies } from "../../services/movies";
import { useSearchParams } from "react-router-dom";

export function useUpcomingMovies() {
  const [searchParams] = useSearchParams();
  const curPage = !searchParams.get("page")
    ? 1
    : Number(searchParams.get("page"));
  const { data: upcomingMovies, isLoading } = useQuery({
    queryKey: ["movies", "up-coming", curPage],
    queryFn: () => getUpcomingMovies(curPage),
  });

  return { upcomingMovies, isLoading };
}
