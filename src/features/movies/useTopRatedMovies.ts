import { useQuery } from "@tanstack/react-query";
import { getTopRatedMovies } from "../../services/movies";

export function useTopRatedMovies() {
  const { data: topRatedMovies, isLoading } = useQuery({
    queryKey: ["movies", "top-rated"],
    queryFn: getTopRatedMovies,
  });

  return { topRatedMovies, isLoading };
}
