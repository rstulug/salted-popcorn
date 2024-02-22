import { Link } from "react-router-dom";

function MovieItem({ movie }) {
  //console.log(movie);
  return (
    <Link
      to={`/movie/${movie.id}`}
      className=" border-sky-400 rounded-md border-2  hover:scale-105 pb-2 w-full flex justify-center items-start"
    >
      <div className="flex justify-center flex-col w-48 items-start">
        <img
          src={`http://image.tmdb.org/t/p/w500${movie.poster_path}`}
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
