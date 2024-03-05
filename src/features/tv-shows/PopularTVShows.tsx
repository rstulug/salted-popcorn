import { useSearchParams } from "react-router-dom";
import GridContainer from "../../ui/GridContainer";
import Spinner from "../../ui/Spinner";
import { usePopularTVShows } from "./usePopularTVShows";
import Pagination from "../../ui/Pagination";
import TVShowItem, { TVShowProp } from "../../ui/TVShowItem";
import EmptyPage from "../../ui/EmptyPage";

function PopularTVShows() {
  const { popularTVShows, isLoading, error } = usePopularTVShows();
  const [searchParams] = useSearchParams();

  const curPage = !searchParams.get("page")
    ? 1
    : Number(searchParams.get("page"));
  if (isLoading) return <Spinner />;
  if (error || popularTVShows.results.length < 1) return <EmptyPage />;
  return (
    <div className="flex flex-row">
      <div className="w-[20%]"></div>
      <div className="flex flex-col flex-1">
        <GridContainer>
          {popularTVShows.results.map((tvShow: TVShowProp["tvshow"]) => (
            <TVShowItem tvshow={tvShow} key={tvShow.id} />
          ))}
        </GridContainer>
        <Pagination pages={popularTVShows.total_pages} curPage={curPage} />
      </div>
    </div>
  );
}

export default PopularTVShows;
