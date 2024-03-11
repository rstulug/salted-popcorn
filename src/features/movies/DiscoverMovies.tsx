import { useSearchParams } from "react-router-dom";
import EmptyPage from "../../ui/EmptyPage";
import GridContainer from "../../ui/GridContainer";
import MovieItem, { MovieProp } from "../../ui/MovieItem";
import Pagination from "../../ui/Pagination";
import Spinner from "../../ui/Spinner";
import { useDiscoverMovies } from "./useDiscoverMovies";

export default function DiscoverMovies() {
  const { discoveredMovies, isLoading, error } = useDiscoverMovies();
  const [searchParams] = useSearchParams();

  const curPage = !searchParams.get("page")
    ? 1
    : Number(searchParams.get("page"));

  if (isLoading) return <Spinner />;
  if (error || discoveredMovies.results.length < 1) return <EmptyPage />;

  return (
    <div className="flex flex-row">
      <div className="flex flex-col flex-1">
        <GridContainer>
          {discoveredMovies.results.map((movie: MovieProp["movie"]) => (
            <MovieItem movie={movie} key={movie.id} />
          ))}
        </GridContainer>

        <Pagination pages={discoveredMovies.total_pages} curPage={curPage} />
      </div>
    </div>
  );
}
