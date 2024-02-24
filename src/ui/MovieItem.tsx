import { Link } from "react-router-dom";
import { IMAGE_URL } from "../utils/constant";

export interface MovieProp {
  movie: {
    id: number;
    poster_path: string;
    title?: string;
    name?: string;
    original_name?: string;
    release_date?: string;
    first_air_date?: string;
  };
}

function MovieItem({ movie }: MovieProp) {
  return (
    <Link
      to={`/movie/${movie.id}`}
      className=" border-sky-400 rounded-md border-2  hover:scale-105 pb-2 flex justify-center items-start w-44"
    >
      <div className="flex justify-center flex-col w-full items-start">
        <img
          src={`${IMAGE_URL}${movie.poster_path}`}
          alt={movie.title}
          className="w-full"
        />
        <div className="text-white w-full text-center text-md mb-2">
          {movie.title || movie.name || movie.original_name}
        </div>
        <div className=" text-zinc-300 text-xs font-thin ml-2">
          {movie.release_date || movie.first_air_date}
        </div>
      </div>
    </Link>
  );
}

export default MovieItem;
