import { Link } from "react-router-dom";
import { IMAGE_URL } from "../utils/constant";

export interface TVShowProp {
  tvshow: {
    id: number;
    poster_path: string;
    name?: string;
    original_name?: string;
    first_air_date?: string;
  };
}

function TVShowItem({ tvshow }: TVShowProp) {
  return (
    <Link
      to={`/tv-shows/${tvshow.id}`}
      className=" border-sky-400 rounded-md border-2  hover:scale-105 pb-2 flex justify-center items-start w-44"
    >
      <div className="flex justify-center flex-col w-full items-start">
        <img
          src={
            tvshow.poster_path
              ? `${IMAGE_URL}${tvshow.poster_path}`
              : "/default_image.jpg"
          }
          alt={tvshow.name}
          className="w-full"
        />
        <div className="text-white w-full text-center text-md mb-2">
          {tvshow.name || tvshow.original_name}
        </div>
        <div className=" text-zinc-300 text-xs font-thin ml-2">
          {tvshow.first_air_date}
        </div>
      </div>
    </Link>
  );
}

export default TVShowItem;
