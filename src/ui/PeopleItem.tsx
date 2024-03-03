import { Link } from "react-router-dom";
import { IMAGE_URL } from "../utils/constant";

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
      className=" border-sky-400 rounded-md border-2  hover:scale-105 pb-2 w-full flex justify-center items-start h-full"
    >
      <div className="flex justify-center flex-col w-full items-start">
        <img
          src={
            actor.profile_path
              ? `${IMAGE_URL}${actor.profile_path}`
              : "/default_user.jpg"
          }
          alt={actor.name || actor.original_name}
          className="w-full h-[17rem] object-cover"
        />
        <div className="text-white w-full text-center text-md mb-2">
          {actor.original_name}
        </div>
      </div>
    </Link>
  );
}
