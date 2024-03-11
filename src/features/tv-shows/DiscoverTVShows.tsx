import { useSearchParams } from "react-router-dom";
import GridContainer from "../../ui/GridContainer";

import Pagination from "../../ui/Pagination";
import Spinner from "../../ui/Spinner";
import { useDiscoverTVShows } from "./useDiscoverTvShows";
import EmptyPage from "../../ui/EmptyPage";
import TVShowItem, { TVShowProp } from "../../ui/TVShowItem";

export default function DiscoverTVShows() {
  const { discoveredTVShows, isLoading, error } = useDiscoverTVShows();
  const [searchParams] = useSearchParams();

  const curPage = !searchParams.get("page")
    ? 1
    : Number(searchParams.get("page"));

  if (isLoading) return <Spinner />;
  if (error || discoveredTVShows.results.length < 1) return <EmptyPage />;

  return (
    <div className="flex flex-row">
      <div className="flex flex-col flex-1">
        <GridContainer>
          {discoveredTVShows.results.map((tvshow: TVShowProp["tvshow"]) => (
            <TVShowItem tvshow={tvshow} key={tvshow.id} />
          ))}
        </GridContainer>

        <Pagination pages={discoveredTVShows.total_pages} curPage={curPage} />
      </div>
    </div>
  );
}
