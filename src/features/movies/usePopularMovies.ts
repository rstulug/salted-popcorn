import { useQuery } from "@tanstack/react-query";
import { getPopularMovies } from "../../services/Movies";

export function usePopularMovies() {
  const { data: popularMovies, isLoading } = useQuery({
    queryKey: ["movies", "popular"],
    queryFn: getPopularMovies,
  });
  return { popularMovies, isLoading };
}
