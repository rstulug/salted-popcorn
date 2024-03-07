import { useSearchParams } from "react-router-dom";
import GridContainer from "../../ui/GridContainer";

import Spinner from "../../ui/Spinner";
import { useAiringTodayTVShows } from "./useAiringTodayTVShows";
import Pagination from "../../ui/Pagination";
import TVShowItem, { TVShowProp } from "../../ui/TVShowItem";
import EmptyPage from "../../ui/EmptyPage";

function AiringTodayTVShows() {
  const { airingTodayTVShows, isLoading, error } = useAiringTodayTVShows();
  const [searchParams] = useSearchParams();

  const curPage = !searchParams.get("page")
    ? 1
    : Number(searchParams.get("page"));
  if (isLoading) return <Spinner />;
  if (error || airingTodayTVShows.results.length < 1) return <EmptyPage />;

  return (
    <div className="flex flex-row">
      <div className="flex flex-col flex-1">
        <GridContainer>
          {airingTodayTVShows.results.map((tvShow: TVShowProp["tvshow"]) => (
            <TVShowItem tvshow={tvShow} key={tvShow.id} />
          ))}
        </GridContainer>
        <Pagination pages={airingTodayTVShows.total_pages} curPage={curPage} />
      </div>
    </div>
  );
}

export default AiringTodayTVShows;
