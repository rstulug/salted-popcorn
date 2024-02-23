import GridContainer from "../../ui/GridContainer";
import MovieItem, { MovieProp } from "../../ui/MovieItem";
import Spinner from "../../ui/Spinner";
import { useOnTVShows } from "./useOnTVShows";

function OnTVShows() {
  const { onTVShows, isLoading } = useOnTVShows();

  if (isLoading) return <Spinner />;
  return (
    <GridContainer>
      {onTVShows.results.map((movie: MovieProp["movie"]) => (
        <MovieItem movie={movie} key={movie.id} />
      ))}
    </GridContainer>
  );
}

export default OnTVShows;
