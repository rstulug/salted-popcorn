import { useSearchParams } from "react-router-dom";
import GridContainer from "../../ui/GridContainer";
import MovieItem, { MovieProp } from "../../ui/MovieItem";
import Spinner from "../../ui/Spinner";
import { useTopRatedMovies } from "./useTopRatedMovies";
import Pagination from "../../ui/Pagination";
import EmptyPage from "../../ui/EmptyPage";

function TopRatedMovies() {
  const { topRatedMovies, isLoading, error } = useTopRatedMovies();
  const [searchParams] = useSearchParams();

  const curPage = !searchParams.get("page")
    ? 1
    : Number(searchParams.get("page"));

  if (isLoading) return <Spinner />;
  if (error || topRatedMovies.results.length < 1) return <EmptyPage />;
  return (
    <div className="flex flex-row">
      <div className="w-[20%]"></div>
      <div className="flex flex-col flex-1">
        <GridContainer>
          {topRatedMovies.results.map((movie: MovieProp["movie"]) => (
            <MovieItem movie={movie} key={movie.id} />
          ))}
        </GridContainer>
        <Pagination pages={topRatedMovies.total_pages} curPage={curPage} />
      </div>
    </div>
  );
}

export default TopRatedMovies;
