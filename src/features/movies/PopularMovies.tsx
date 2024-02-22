import GridContainer from "../../ui/GridContainer";
import MovieItem, { MovieProp } from "../../ui/MovieItem";
import Spinner from "../../ui/Spinner";
import { usePopularMovies } from "./usePopularMovies";

function PopularMovies() {
  const { popularMovies, isLoading } = usePopularMovies();

  if (isLoading) return <Spinner />;
  return (
    <GridContainer>
      {popularMovies.results.map((movie: MovieProp["movie"]) => (
        <MovieItem movie={movie} key={movie.id} />
      ))}
    </GridContainer>
  );
}

export default PopularMovies;
