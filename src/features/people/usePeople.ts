import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getPeople } from "../../services/people";
import { useSearchParams } from "react-router-dom";

export function usePeople() {
  const [searchParams] = useSearchParams();
  const queryClient = useQueryClient();
  const curPage = !searchParams.get("page")
    ? 1
    : Number(searchParams.get("page"));
  const { data: people, isLoading, error } = useQuery({
    queryKey: ["people", "popular", curPage],
    queryFn: () => getPeople(curPage),
  });

  //Prefetching

  const totalPages = people?.total_pages;

  if (curPage < totalPages) {
    queryClient.prefetchQuery({
      queryKey: ["people", "popular", curPage + 1],
      queryFn: () => getPeople(curPage + 1),
    });
  }

  if (curPage > 1) {
    queryClient.prefetchQuery({
      queryKey: ["people", "popular", curPage - 1],
      queryFn: () => getPeople(curPage - 1),
    });
  }

  return { people, isLoading, error };
}
