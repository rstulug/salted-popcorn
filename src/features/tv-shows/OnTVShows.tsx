import { useSearchParams } from "react-router-dom";
import GridContainer from "../../ui/GridContainer";
import MovieItem, { MovieProp } from "../../ui/MovieItem";
import Spinner from "../../ui/Spinner";
import { useOnTVShows } from "./useOnTVShows";
import Pagination from "../../ui/Pagination";

function OnTVShows() {
  const { onTVShows, isLoading } = useOnTVShows();
  const [searchParams] = useSearchParams();

  const curPage = !searchParams.get("page")
    ? 1
    : Number(searchParams.get("page"));

  if (isLoading) return <Spinner />;
  return (
    <div className="flex flex-col">
      <GridContainer>
        {onTVShows.results.map((movie: MovieProp["movie"]) => (
          <MovieItem movie={movie} key={movie.id} />
        ))}
      </GridContainer>
      <Pagination pages={onTVShows.total_pages} curPage={curPage} />
    </div>
  );
}

export default OnTVShows;
