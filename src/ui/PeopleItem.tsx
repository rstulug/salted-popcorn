import { Link } from "react-router-dom";

export interface ActorProps {
  actor: {
    id: number;
    name: string;
    profile_path: string;
    original_name?: string;
  };
}

export default function PeopleItem({ actor }: ActorProps) {
  return (
    <Link
      to={`/people/${actor.id}`}
      className=" border-sky-400 rounded-md border-2  hover:scale-105 pb-2 w-full flex justify-center items-start"
    >
      <div className="flex justify-center flex-col w-48 items-start">
        <img
          src={`http://image.tmdb.org/t/p/w500${actor.profile_path}`}
          alt={actor.name || actor.original_name}
          className="w-full"
        />
        <div className="text-white w-full text-center text-md mb-2">
          {actor.original_name}
        </div>
      </div>
    </Link>
  );
}
