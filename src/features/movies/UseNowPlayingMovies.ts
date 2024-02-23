import { useQuery } from "@tanstack/react-query";
import { getNowPlayingMovies } from "../../services/movies";
import { useSearchParams } from "react-router-dom";

export function useNowPlayingMovies() {
  const [searchParams] = useSearchParams();
  const curPage = !searchParams.get("page")
    ? 1
    : Number(searchParams.get("page"));

  const { data: nowPlayingMovies, isLoading } = useQuery({
    queryKey: ["movies", "now-playing", curPage],
    queryFn: () => getNowPlayingMovies(curPage),
  });
  return { nowPlayingMovies, isLoading };
}
