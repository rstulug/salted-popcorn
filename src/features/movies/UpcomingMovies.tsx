import { useSearchParams } from "react-router-dom";
import GridContainer from "../../ui/GridContainer";
import MovieItem, { MovieProp } from "../../ui/MovieItem";
import Spinner from "../../ui/Spinner";
import { useUpcomingMovies } from "./useUpcomingMovies";
import Pagination from "../../ui/Pagination";

function UpcomingMovies() {
  const { upcomingMovies, isLoading } = useUpcomingMovies();

  const [searchParams] = useSearchParams();

  const curPage = !searchParams.get("page")
    ? 1
    : Number(searchParams.get("page"));

  if (isLoading) return <Spinner />;
  return (
    <div className="flex flex-col">
      <GridContainer>
        {upcomingMovies.results.map((movie: MovieProp["movie"]) => (
          <MovieItem movie={movie} key={movie.id} />
        ))}
      </GridContainer>
      <Pagination pages={upcomingMovies.total_pages} curPage={curPage} />
    </div>
  );
}

export default UpcomingMovies;
