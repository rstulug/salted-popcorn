import { useSearchParams } from "react-router-dom";
import EmptyPage from "../../ui/EmptyPage";
import GridContainer from "../../ui/GridContainer";

import Pagination from "../../ui/Pagination";
import Spinner from "../../ui/Spinner";

import { usePeopleSearch } from "./usePeopleSearch";
import PeopleItem, { ActorProps } from "../../ui/PeopleItem";

export default function SearchedPeople() {
  const { searchedPeople, isLoading, error } = usePeopleSearch();

  const [searchParams] = useSearchParams();

  const curPage = !searchParams.get("page")
    ? 1
    : Number(searchParams.get("page"));

  if (isLoading) return <Spinner />;
  if (error || searchedPeople.results.length < 1) return <EmptyPage />;
  console.log(searchedPeople);
  return (
    <div className="">
      <GridContainer>
        {searchedPeople.results.map((actor: ActorProps["actor"]) => (
          <PeopleItem actor={actor} key={actor.id} />
        ))}
      </GridContainer>
      <Pagination pages={searchedPeople.total_pages} curPage={curPage} />
    </div>
  );
}
