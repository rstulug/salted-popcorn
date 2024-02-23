import { useQuery } from "@tanstack/react-query";
import { getPeople } from "../../services/people";

export function usePeople() {
  const { data: people, isLoading } = useQuery({
    queryKey: ["people", "popular"],
    queryFn: getPeople,
  });

  return { people, isLoading };
}
