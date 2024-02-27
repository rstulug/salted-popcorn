import { useSearchParams } from "react-router-dom";
import GridContainer from "../../ui/GridContainer";
import Spinner from "../../ui/Spinner";
import { useTopRatedTVShows } from "./useTopRatedTVShows";
import Pagination from "../../ui/Pagination";
import TVShowItem, { TVShowProp } from "../../ui/TVShowItem";

function TopRatedTVShows() {
  const { topRatedTVShows, isLoading } = useTopRatedTVShows();
  const [searchParams] = useSearchParams();

  const curPage = !searchParams.get("page")
    ? 1
    : Number(searchParams.get("page"));
  if (isLoading) return <Spinner />;
  return (
    <div className="flex flex-col">
      <GridContainer>
        {topRatedTVShows.results.map((tvShow: TVShowProp["tvshow"]) => (
          <TVShowItem tvshow={tvShow} key={tvShow.id} />
        ))}
      </GridContainer>
      <Pagination pages={topRatedTVShows.total_pages} curPage={curPage} />
    </div>
  );
}

export default TopRatedTVShows;
