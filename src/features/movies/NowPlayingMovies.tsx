import { useSearchParams } from "react-router-dom";
import GridContainer from "../../ui/GridContainer";
import MovieItem, { MovieProp } from "../../ui/MovieItem";
import Pagination from "../../ui/Pagination";
import Spinner from "../../ui/Spinner";

import EmptyPage from "../../ui/EmptyPage";
import { useNowPlayingMovies } from "./useNowPlayingMovies";

function NowPlayingMovies() {
  const { nowPlayingMovies, isLoading, error } = useNowPlayingMovies();
  const [searchParams] = useSearchParams();

  const curPage = !searchParams.get("page")
    ? 1
    : Number(searchParams.get("page"));

  if (isLoading) return <Spinner />;
  if (error || nowPlayingMovies.results.length < 1) return <EmptyPage />;
  return (
    <div className="flex flex-row">
      <div className="flex flex-col flex-1">
        <GridContainer>
          {nowPlayingMovies.results.map((movie: MovieProp["movie"]) => (
            <MovieItem movie={movie} key={movie.id} />
          ))}
        </GridContainer>

        <Pagination pages={nowPlayingMovies.total_pages} curPage={curPage} />
      </div>
    </div>
  );
}

export default NowPlayingMovies;
