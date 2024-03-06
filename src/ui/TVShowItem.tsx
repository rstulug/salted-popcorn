import { Link } from "react-router-dom";
import { IMAGE_URL } from "../utils/constant";
import RadialChartScore from "./RadialChartScore";

export interface TVShowProp {
  tvshow: {
    id: number;
    poster_path: string;
    name?: string;
    original_name?: string;
    first_air_date?: string;
    vote_average: number;
  };
}

function TVShowItem({ tvshow }: TVShowProp) {
  return (
    <Link
      to={`/tv-shows/${tvshow.id}`}
      className=" border-sky-400 rounded-md border-2  pb-2 flex justify-center items-start w-[12rem] h-full"
    >
      <div className="flex justify-center flex-col w-full items-start">
        <div className="relative mb-6">
          <img
            src={
              tvshow.poster_path
                ? `${IMAGE_URL}${tvshow.poster_path}`
                : "/default_image.jpg"
            }
            alt={tvshow.name}
            className="w-full h-[18rem] object-cover rounded-md"
          />
          <div className="absolute right-0 -bottom-6">
            <RadialChartScore score={tvshow.vote_average} />
          </div>
        </div>
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
