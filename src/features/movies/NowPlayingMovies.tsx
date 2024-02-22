import GridContainer from "../../ui/GridContainer";
import MovieItem from "../../ui/MovieItem";
import Spinner from "../../ui/Spinner";
import { useNowPlayingMovies } from "./UseNowPlayingMovies";

function NowPlayingMovies() {
  const { nowPlayingMovies, isLoading } = useNowPlayingMovies();

  if (isLoading) return <Spinner />;
  return (
    <div>
      <GridContainer>
        {nowPlayingMovies.results.map((movie) => (
          <MovieItem movie={movie} key={movie.id} />
        ))}
      </GridContainer>
    </div>
  );
}

export default NowPlayingMovies;
