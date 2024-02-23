import { useSearchParams } from "react-router-dom";
import GridContainer from "../../ui/GridContainer";
import MovieItem, { MovieProp } from "../../ui/MovieItem";
import Spinner from "../../ui/Spinner";
import { usePopularTVShows } from "./usePopularTVShows";
import Pagination from "../../ui/Pagination";

function PopularTVShows() {
  const { popularTVShows, isLoading } = usePopularTVShows();
  const [searchParams] = useSearchParams();

  const curPage = !searchParams.get("page")
    ? 1
    : Number(searchParams.get("page"));
  if (isLoading) return <Spinner />;
  return (
    <div className="flex flex-col">
      <GridContainer>
        {popularTVShows.results.map((movie: MovieProp["movie"]) => (
          <MovieItem movie={movie} key={movie.id} />
        ))}
      </GridContainer>
      <Pagination pages={popularTVShows.total_pages} curPage={curPage} />
    </div>
  );
}

export default PopularTVShows;
