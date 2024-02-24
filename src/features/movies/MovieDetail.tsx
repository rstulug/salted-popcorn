import MovieItem from "../../ui/MovieItem";
import Spinner from "../../ui/Spinner";
import { IMAGE_URL } from "../../utils/constant";
import { useMovie } from "./useMovie";

export default function MovieDetail() {
  const { movieDetail, isLoading } = useMovie();
  console.log(movieDetail);
  if (isLoading) return <Spinner />;
  return (
    <div className="flex ">
      <div className="w-[30%] m-0">
        <img
          src={IMAGE_URL + movieDetail.poster_path}
          alt={`${movieDetail.title}`}
          className="w-full h-[30rem] object-cover"
        />
      </div>
      <div
        style={{
          backgroundImage: `linear-gradient(rgba(178, 204, 209, 0.623), rgba(113, 113, 136, 0.849)),url(${IMAGE_URL}${movieDetail.backdrop_path})`,
        }}
        className="w-[70%] h-[30rem] bg-no-repeat bg-cover m-0"
      >
        <div className="text-gray-300 flex justify-center items-end h-full py-2 px-2 font-semibold text-center">
          {movieDetail.overview}
        </div>
      </div>
    </div>
  );
}
