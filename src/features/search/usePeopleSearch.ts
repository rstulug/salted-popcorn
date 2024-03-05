import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";

import { getSearchPeople } from "../../services/people";

export function usePeopleSearch() {
  const [searchParams] = useSearchParams();
  const curPage = !searchParams.get("page")
    ? 1
    : Number(searchParams.get("page"));

  const searhQuery = !searchParams.get("search")
    ? ""
    : searchParams.get("search");
  const {
    data: searchedPeople,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["people", "search", curPage, searhQuery],
    queryFn: () => getSearchPeople(searhQuery, curPage),
  });

  return { searchedPeople, isLoading, error };
}
