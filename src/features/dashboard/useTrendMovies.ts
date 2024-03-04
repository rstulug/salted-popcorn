import { useQuery } from "@tanstack/react-query";
import { getTrendMovies } from "../../services/movies";

export function useTrendMovies() {
  const { data: trendMovies, isLoading } = useQuery({
    queryKey: ["movies", "trending"],
    queryFn: getTrendMovies,
  });

  return { trendMovies, isLoading };
}
