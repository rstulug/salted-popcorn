import GridContainer from "../../ui/GridContainer";
import MovieItem from "../../ui/MovieItem";
import Spinner from "../../ui/Spinner";
import { useTopRatedTVShows } from "./useTopRatedTVShows";

function TopRatedTVShows() {
  const { topRatedTVShows, isLoading } = useTopRatedTVShows();
  if (isLoading) return <Spinner />;
  return (
    <GridContainer>
      {topRatedTVShows.results.map((movie) => (
        <MovieItem movie={movie} key={movie.id} />
      ))}
    </GridContainer>
  );
}

export default TopRatedTVShows;
