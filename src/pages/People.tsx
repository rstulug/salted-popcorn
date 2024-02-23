import { usePeople } from "../features/people/usePeople";
import GridContainer from "../ui/GridContainer";
import PeopleItem, { ActorProps } from "../ui/PeopleItem";
import Spinner from "../ui/Spinner";

function People() {
  const { people, isLoading } = usePeople();
  if (isLoading) return <Spinner />;

  return (
    <div className="flex justify-center flex-row gap-4 w-full">
      <div className="w-[20%]">Sidebar</div>
      <div className="w-[80%]">
        <GridContainer>
          {people.results.map((actor: ActorProps["actor"]) => (
            <PeopleItem actor={actor} key={actor.id} />
          ))}
        </GridContainer>
      </div>
    </div>
  );
}

export default People;
