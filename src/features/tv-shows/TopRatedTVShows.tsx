import GridContainer from "../../ui/GridContainer";
import MovieItem, { MovieProp } from "../../ui/MovieItem";
import Spinner from "../../ui/Spinner";
import { useTopRatedTVShows } from "./useTopRatedTVShows";

function TopRatedTVShows() {
  const { topRatedTVShows, isLoading } = useTopRatedTVShows();
  if (isLoading) return <Spinner />;
  return (
    <GridContainer>
      {topRatedTVShows.results.map((movie: MovieProp["movie"]) => (
        <MovieItem movie={movie} key={movie.id} />
      ))}
    </GridContainer>
  );
}

export default TopRatedTVShows;
