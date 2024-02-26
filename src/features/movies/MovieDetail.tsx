import Spinner from "../../ui/Spinner";
import { IMAGE_URL } from "../../utils/constant";
import { useMovie } from "./useMovie";

export default function MovieDetail() {
  const { movieDetail, isLoading } = useMovie();
  console.log(movieDetail);
  if (isLoading) return <Spinner />;
  return (
<<<<<<< HEAD
    <div className="flex h-[30rem] ml-8 mt-8 gap-5 text-sky-100">
      <div className="">
        <img
          src={IMAGE_URL + movieDetail.poster_path}
          alt={`${movieDetail.title}`}
          className="w-full h-[25rem] object-contain rounded-2xl"
        />
      </div>
      <div>
        <div className="font-bold text-2xl italic text-center">
          {movieDetail.original_title
            ? movieDetail.original_title
            : movieDetail.title}
        </div>
        <div className="flex gap-3 ">
          Genre:{" "}
          {movieDetail.genres.map((genre: { id: number; name: string }) => (
            <span>{genre.name}</span>
          ))}
=======
    <div className="flex justify-between">
      <div></div>
      <div
        style={{
          backgroundImage: `linear-gradient(rgba(178, 204, 209, 0.623), rgba(113, 113, 136, 0.849)),url(${IMAGE_URL}${movieDetail.backdrop_path})`,
        }}
        className="w-[70%] h-[30rem] bg-no-repeat bg-cover "
      >
        <div className="text-zinc-200 flex justify-center items-end h-full py-2 px-2 font-semibold">
          {movieDetail.overview}
>>>>>>> parent of defaf5c (Small changes in moviedetail)
        </div>
      </div>
    </div>
  );
}
