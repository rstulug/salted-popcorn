import { useQuery } from "@tanstack/react-query";
import { getNowPlayingMovies } from "../../services/Movies";

export function useNowPlayingMovies() {
  const { data: nowPlayingMovies, isLoading } = useQuery({
    queryKey: ["movies", "now-playing"],
    queryFn: getNowPlayingMovies,
  });
  return { nowPlayingMovies, isLoading };
}
