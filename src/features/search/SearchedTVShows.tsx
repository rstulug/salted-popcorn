import { useSearchParams } from "react-router-dom";
import EmptyPage from "../../ui/EmptyPage";
import GridContainer from "../../ui/GridContainer";

import Pagination from "../../ui/Pagination";
import Spinner from "../../ui/Spinner";

import { useTVShowSearch } from "./useTVShowSearch";
import TVShowItem, { TVShowProp } from "../../ui/TVShowItem";

export default function SearchedTVShows() {
  const { searchedTVShows, isLoading, error } = useTVShowSearch();

  const [searchParams] = useSearchParams();

  const curPage = !searchParams.get("page")
    ? 1
    : Number(searchParams.get("page"));

  if (isLoading) return <Spinner />;
  if (error || searchedTVShows.results.length < 1) return <EmptyPage />;
  console.log(searchedTVShows);
  return (
    <div className="">
      <GridContainer>
        {searchedTVShows.results.map((tvshow: TVShowProp["tvshow"]) => (
          <TVShowItem tvshow={tvshow} key={tvshow.id} />
        ))}
      </GridContainer>
      <Pagination pages={searchedTVShows.total_pages} curPage={curPage} />
    </div>
  );
}
