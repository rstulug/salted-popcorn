import { useQuery } from "@tanstack/react-query";
import { getPeople } from "../../services/people";
import { useSearchParams } from "react-router-dom";

export function usePeople() {
  const [searchParams] = useSearchParams();
  const curPage = !searchParams.get("page")
    ? 1
    : Number(searchParams.get("page"));
  const { data: people, isLoading } = useQuery({
    queryKey: ["people", "popular", curPage],
    queryFn: () => getPeople(curPage),
  });

  return { people, isLoading };
}
