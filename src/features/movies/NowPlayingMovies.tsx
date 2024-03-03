import { useSearchParams } from "react-router-dom";
import GridContainer from "../../ui/GridContainer";
import MovieItem, { MovieProp } from "../../ui/MovieItem";
import Pagination from "../../ui/Pagination";
import Spinner from "../../ui/Spinner";
import { useNowPlayingMovies } from "./UseNowPlayingMovies";

function NowPlayingMovies() {
  const { nowPlayingMovies, isLoading } = useNowPlayingMovies();
  const [searchParams] = useSearchParams();

  const curPage = !searchParams.get("page")
    ? 1
    : Number(searchParams.get("page"));

  if (isLoading) return <Spinner />;
  return (
    <div className="flex flex-row">
      <div className="w-[20%]"></div>
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
