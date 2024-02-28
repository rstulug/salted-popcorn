import { Link } from "react-router-dom";
import { IMAGE_URL } from "../utils/constant";
// import { useState } from "react";

export interface CastProp {
  cast: {
    profile_path: string;
    name: string;
    character: string;
    id: number;
  };
}

export default function CastItem({ cast }: CastProp) {
  //   const [curPage, setCurPage] = useState<number>(1);
  return (
    <Link
      to={`/people/${cast.id}`}
      className="rounded-md border-2 border-sky-400  h-auto pb-2  w-[200px]"
    >
      <img
        src={
          cast.profile_path
            ? IMAGE_URL + cast.profile_path
            : "/default_user.jpg"
        }
        alt={cast.name}
        className="w-full h-auto object-cover"
      />
      <div>{cast.name} </div>
      <div>Role: {cast.character}</div>
    </Link>
  );
}
