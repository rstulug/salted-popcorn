import { useSearchParams } from "react-router-dom";
import EmptyPage from "../../ui/EmptyPage";
import GridContainer from "../../ui/GridContainer";
import MovieItem, { MovieProp } from "../../ui/MovieItem";
import Pagination from "../../ui/Pagination";
import Spinner from "../../ui/Spinner";
import { useMovieSearch } from "./useMovieSearch";

export default function SearchedMovies() {
  const { searchedMovies, isLoading, error } = useMovieSearch();

  const [searchParams] = useSearchParams();

  const curPage = !searchParams.get("page")
    ? 1
    : Number(searchParams.get("page"));

  if (isLoading) return <Spinner />;
  if (error || searchedMovies.results.length < 1) return <EmptyPage />;
  console.log(searchedMovies);
  return (
    <div className="">
      <GridContainer>
        {searchedMovies.results.map((movie: MovieProp["movie"]) => (
          <MovieItem movie={movie} key={movie.id} />
        ))}
      </GridContainer>
      <Pagination pages={searchedMovies.total_pages} curPage={curPage} />
    </div>
  );
}
