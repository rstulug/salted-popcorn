import { useQuery } from "@tanstack/react-query";
import { getTVShowDetail } from "../../services/tv-shows";
import { useParams } from "react-router-dom";

export function useTVShow() {
  const { tvshowId } = useParams();
  const { data: tvShowDetail, isLoading } = useQuery({
    queryKey: ["tv-show", tvshowId],
    queryFn: () => getTVShowDetail(tvshowId),
  });

  return { tvShowDetail, isLoading };
}
