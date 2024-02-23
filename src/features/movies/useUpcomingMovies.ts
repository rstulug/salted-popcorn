import { useQuery } from "@tanstack/react-query";
import { getUpcomingMovies } from "../../services/movies";

export function useUpcomingMovies() {
  const { data: upcomingMovies, isLoading } = useQuery({
    queryKey: ["movies", "up-coming"],
    queryFn: getUpcomingMovies,
  });

  return { upcomingMovies, isLoading };
}
