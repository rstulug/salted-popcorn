import { useQuery } from "@tanstack/react-query";
import { getMovieById } from "../../services/movies";
import { useParams } from "react-router-dom";

export function useMovie() {
  const { movieId } = useParams();
  const { data: movieDetail, isLoading } = useQuery({
    queryKey: ["movie", movieId],
    queryFn: () => getMovieById(movieId),
  });
  return { movieDetail, isLoading };
}
