import Spinner from "../../ui/Spinner";
import { IMAGE_URL } from "../../utils/constant";
import { useMovie } from "./useMovie";

export default function MovieDetail() {
  const { movieDetail, isLoading } = useMovie();
  console.log(movieDetail);
  if (isLoading) return <Spinner />;
  return (
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
        </div>
      </div>
    </div>
  );
}
