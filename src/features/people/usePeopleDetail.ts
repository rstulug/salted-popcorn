import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getPeopleDetail } from "../../services/people";

export function usePeopleDetail() {
  const { peopleId } = useParams();
  const { data: peopleDetail, isLoading } = useQuery({
    queryKey: ["people", peopleId],
    queryFn: () => getPeopleDetail(peopleId),
  });
  return { peopleDetail, isLoading };
}
