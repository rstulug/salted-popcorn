import Spinner from "../../ui/Spinner";
import { IMAGE_URL } from "../../utils/constant";
import { useMovie } from "./useMovie";

export default function MovieDetail() {
  const { movieDetail, isLoading } = useMovie();
  console.log(movieDetail);
  if (isLoading) return <Spinner />;
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(rgba(181, 192, 194, 0.438), rgba(54, 54, 61, 0.788)),url(${IMAGE_URL}${movieDetail.backdrop_path})`,
      }}
      className="w-full md:bg-cover h-[40rem]  "
    ></div>
  );
}
