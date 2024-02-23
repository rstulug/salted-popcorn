import GridContainer from "../../ui/GridContainer";
import MovieItem, { MovieProp } from "../../ui/MovieItem";
import Spinner from "../../ui/Spinner";
import { useTopRatedMovies } from "./useTopRatedMovies";

function TopRatedMovies() {
  const { topRatedMovies, isLoading } = useTopRatedMovies();

  if (isLoading) return <Spinner />;
  return (
    <GridContainer>
      {topRatedMovies.results.map((movie: MovieProp["movie"]) => (
        <MovieItem movie={movie} key={movie.id} />
      ))}
    </GridContainer>
  );
}

export default TopRatedMovies;
