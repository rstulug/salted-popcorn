import { Link } from "react-router-dom";
import { IMAGE_URL } from "../utils/constant";

export interface CastProp {
  cast: {
    profile_path: string;
    name: string;
    character: string;
    id: number;
  };
}

export default function CastItem({ cast }: CastProp) {
  return (
    <Link
      to={`/people/${cast.id}`}
      className="border-sky-400 rounded-md border-2 pb-2 flex justify-center items-start  h-full w-[12rem]"
    >
      <div className="flex justify-center flex-col w-full items-start">
        <img
          src={
            cast.profile_path
              ? IMAGE_URL + cast.profile_path
              : "/default_user.jpg"
          }
          alt={cast.name}
          className="w-full h-[18rem] object-cover"
        />
        <div>{cast.name} </div>
        <div>Role: {cast.character}</div>
      </div>
    </Link>
  );
}
