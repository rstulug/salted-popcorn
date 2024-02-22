import GridContainer from "../../ui/GridContainer";
import MovieItem from "../../ui/MovieItem";
import Spinner from "../../ui/Spinner";
import { useAiringTodayTVShows } from "./useAiringTodayTVShows";

function AiringTodayTVShows() {
  const { airingTodayTVShows, isLoading } = useAiringTodayTVShows();
  if (isLoading) return <Spinner />;

  return (
    <GridContainer>
      {airingTodayTVShows.results.map((movie) => (
        <MovieItem movie={movie} key={movie.id} />
      ))}
    </GridContainer>
  );
}

export default AiringTodayTVShows;
