import Spinner from "../../ui/Spinner";
import { usePeopleDetail } from "./usePeopleDetail";

export default function PeopleDetail() {
  const { peopleDetail, isLoading } = usePeopleDetail();

  if (isLoading) return <Spinner />;
  console.log(peopleDetail);
  return <div>PeopleDetail</div>;
}
