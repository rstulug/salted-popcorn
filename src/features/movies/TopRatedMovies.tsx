import { useSearchParams } from "react-router-dom";
import GridContainer from "../../ui/GridContainer";
import MovieItem, { MovieProp } from "../../ui/MovieItem";
import Spinner from "../../ui/Spinner";
import { useTopRatedMovies } from "./useTopRatedMovies";
import Pagination from "../../ui/Pagination";

function TopRatedMovies() {
  const { topRatedMovies, isLoading } = useTopRatedMovies();
  const [searchParams] = useSearchParams();

  const curPage = !searchParams.get("page")
    ? 1
    : Number(searchParams.get("page"));

  if (isLoading) return <Spinner />;
  return (
    <div className="flex flex-col">
      <GridContainer>
        {topRatedMovies.results.map((movie: MovieProp["movie"]) => (
          <MovieItem movie={movie} key={movie.id} />
        ))}
      </GridContainer>
      <Pagination pages={topRatedMovies.total_pages} curPage={curPage} />
    </div>
  );
}

export default TopRatedMovies;
