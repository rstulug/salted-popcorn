import GridContainer from "../../ui/GridContainer";
import MovieItem, { MovieProp } from "../../ui/MovieItem";
import Spinner from "../../ui/Spinner";
import { usePopularTVShows } from "./usePopularTVShows";

function PopularTVShows() {
  const { popularTVShows, isLoading } = usePopularTVShows();
  if (isLoading) return <Spinner />;
  return (
    <GridContainer>
      {popularTVShows.results.map((movie: MovieProp["movie"]) => (
        <MovieItem movie={movie} key={movie.id} />
      ))}
    </GridContainer>
  );
}

export default PopularTVShows;
