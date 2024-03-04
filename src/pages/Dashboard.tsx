import { useTrendMovies } from "../features/dashboard/useTrendMovies";
import { useTrendTVShows } from "../features/dashboard/useTrendTVShows";
import SliderItem from "../ui/SliderItem";
import Spinner from "../ui/Spinner";
import { IMAGE_URL } from "../utils/constant";

function Dashboard() {
  const { trendMovies, isLoading: isLoadingMovies } = useTrendMovies();
  const { trendTVShows, isLoading: isLoadingTVShows } = useTrendTVShows();

  if (isLoadingMovies || isLoadingTVShows) return <Spinner />;
  const randomPoster =
    trendMovies.results[Math.floor(Math.random() * trendMovies.results.length)]
      ?.backdrop_path;
  return (
    <div className="flex flex-col w-full ">
      <div
        style={{
          backgroundImage: `linear-gradient(to left bottom,#676f7e, rgba(52, 59, 63, 0.1)),url(${
            IMAGE_URL + randomPoster
          })`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
        className="w-full h-[30rem] rounded-b-2xl"
      ></div>
      <div className="my-4">
        {isLoadingMovies ? (
          <Spinner />
        ) : (
          <div className="mt-4 w-full ">
            <span className="text-xl text-sky-200 font-semibold">
              Trending Movies
            </span>
            <SliderItem data={trendMovies.results} type="movie" />
          </div>
        )}

        {isLoadingTVShows ? (
          <Spinner />
        ) : (
          <div className="mt-4 w-full ">
            <span className="text-xl text-sky-200 font-semibold">
              Trending TV Shows
            </span>
            <SliderItem data={trendTVShows.results} type="tvshow" />
          </div>
        )}
      </div>
    </div>
  );
}

export default Dashboard;
