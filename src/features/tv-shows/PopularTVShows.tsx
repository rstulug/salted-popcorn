import GridContainer from "../../ui/GridContainer";
import MovieItem from "../../ui/MovieItem";
import Spinner from "../../ui/Spinner";
import { usePopularTVShows } from "./usePopularTVShows";

function PopularTVShows() {
  const { popularTVShows, isLoading } = usePopularTVShows();
  if (isLoading) return <Spinner />;
  return (
    <GridContainer>
      {popularTVShows.results.map((movie) => (
        <MovieItem movie={movie} key={movie.id} />
      ))}
    </GridContainer>
  );
}

export default PopularTVShows;
