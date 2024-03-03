import { useSearchParams } from "react-router-dom";
import { usePeople } from "../features/people/usePeople";
import GridContainer from "../ui/GridContainer";
import PeopleItem, { ActorProps } from "../ui/PeopleItem";
import Spinner from "../ui/Spinner";
import Pagination from "../ui/Pagination";

function People() {
  const { people, isLoading } = usePeople();
  const [searchParams] = useSearchParams();

  const curPage = !searchParams.get("page")
    ? 1
    : Number(searchParams.get("page"));
  if (isLoading) return <Spinner />;

  return (
    <div className="flex flex-row">
      <div className="w-[20%]"></div>
      <div className="flex justify-center flex-row gap-4 w-full flex-1">
        <div className="flex flex-col w-full">
          <GridContainer>
            {people.results.map((actor: ActorProps["actor"]) => (
              <PeopleItem actor={actor} key={actor.id} />
            ))}
          </GridContainer>
          <Pagination pages={people.total_pages} curPage={curPage} />
        </div>
      </div>
    </div>
  );
}

export default People;
