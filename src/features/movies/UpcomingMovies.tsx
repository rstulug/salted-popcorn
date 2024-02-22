import GridContainer from "../../ui/GridContainer";
import MovieItem from "../../ui/MovieItem";
import Spinner from "../../ui/Spinner";
import { useUpcomingMovies } from "./useUpcomingMovies";

function UpcomingMovies() {
  const { upcomingMovies, isLoading } = useUpcomingMovies();
  if (isLoading) return <Spinner />;
  return (
    <GridContainer>
      {upcomingMovies.results.map((movie) => (
        <MovieItem movie={movie} key={movie.id} />
      ))}
    </GridContainer>
  );
}

export default UpcomingMovies;
