import { Link } from "react-router-dom";
import { IMAGE_URL } from "../utils/constant";
import RadialChartScore from "./RadialChartScore";

export interface MovieProp {
  movie: {
    id: number;
    poster_path: string;
    title?: string;
    original_title?: string;
    release_date?: string;
    vote_average: number;
  };
}

function MovieItem({ movie }: MovieProp) {
  return (
    <Link
      to={`/movie/${movie.id}`}
      className=" border-sky-400 rounded-md border-2  hover:scale-105 pb-2 flex justify-center items-start w-44"
    >
      <div className="flex justify-center flex-col w-full items-start ">
        <div className="relative mb-6">
          <img
            src={
              movie.poster_path
                ? `${IMAGE_URL}${movie.poster_path}`
                : "/default_image.jpg"
            }
            alt={movie.title}
            className="w-full "
          />
          <div className="absolute -bottom-8 right-0">
            <RadialChartScore score={movie.vote_average} />
          </div>
        </div>

        <div className="text-white w-full text-center text-md mb-2">
          {movie.title || movie.original_title}P
        </div>
        <div className=" text-zinc-300 text-xs font-thin ml-2">
          {movie.release_date}
        </div>
      </div>
    </Link>
  );
}

export default MovieItem;
