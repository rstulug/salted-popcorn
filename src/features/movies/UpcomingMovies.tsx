import GridContainer from "../../ui/GridContainer";
import MovieItem, { MovieProp } from "../../ui/MovieItem";
import Spinner from "../../ui/Spinner";
import { useUpcomingMovies } from "./useUpcomingMovies";

function UpcomingMovies() {
  const { upcomingMovies, isLoading } = useUpcomingMovies();
  if (isLoading) return <Spinner />;
  return (
    <GridContainer>
      {upcomingMovies.results.map((movie: MovieProp["movie"]) => (
        <MovieItem movie={movie} key={movie.id} />
      ))}
    </GridContainer>
  );
}

export default UpcomingMovies;
