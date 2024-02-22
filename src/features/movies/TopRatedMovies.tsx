import GridContainer from "../../ui/GridContainer";
import MovieItem from "../../ui/MovieItem";
import Spinner from "../../ui/Spinner";
import { useTopRatedMovies } from "./useTopRatedMovies";

function TopRatedMovies() {
  const { topRatedMovies, isLoading } = useTopRatedMovies();
  console.log(topRatedMovies);

  if (isLoading) return <Spinner />;
  return (
    <GridContainer>
      {topRatedMovies.results.map((movie) => (
        <MovieItem movie={movie} key={movie.id} />
      ))}
    </GridContainer>
  );
}

export default TopRatedMovies;
