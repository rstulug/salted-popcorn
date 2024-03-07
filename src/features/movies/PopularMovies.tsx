import { useSearchParams } from "react-router-dom";
import GridContainer from "../../ui/GridContainer";
import MovieItem, { MovieProp } from "../../ui/MovieItem";
import Spinner from "../../ui/Spinner";
import { usePopularMovies } from "./usePopularMovies";
import Pagination from "../../ui/Pagination";
import EmptyPage from "../../ui/EmptyPage";

function PopularMovies() {
  const { popularMovies, isLoading, error } = usePopularMovies();

  const [searchParams] = useSearchParams();

  const curPage = !searchParams.get("page")
    ? 1
    : Number(searchParams.get("page"));

  if (isLoading) return <Spinner />;
  if (error || popularMovies.results.length < 1) return <EmptyPage />;
  return (
    <div className="flex flex-row">
      <div className="flex flex-col flex-1">
        <GridContainer>
          {popularMovies.results.map((movie: MovieProp["movie"]) => (
            <MovieItem movie={movie} key={movie.id} />
          ))}
        </GridContainer>
        <Pagination pages={popularMovies.total_pages} curPage={curPage} />
      </div>
    </div>
  );
}

export default PopularMovies;
