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
    // <div className="flex flex-col w-full ">
    //   <div
    //     style={{
    //       backgroundImage: `url(${IMAGE_URL + randomPoster})`,
    //       backgroundRepeat: "no-repeat",
    //       backgroundSize: "cover",
    //       backgroundPosition: "center center",
    //       filter:
    //         "sepia(100%) hue-rotate(160deg) saturate(1000%) brightness(69%) opacity(80%) ",
    //     }}
    //     className="w-full h-[30rem] rounded-b-2xl relative"
    //   ></div>
    //   <div className="flex justify-center items-center h-full text-3xl flex-col gap-4 mt-[10rem] font-bold  text-white">
    //     <div>All details about Movies, TV Shows and Actors.</div>
    //     <div>All information that shown to you provided py</div>
    //     <div>
    //       <a
    //         href="https://www.themoviedb.org/"
    //         target="_blank"
    //         className="underline"
    //       >
    //         The Movie Database
    //       </a>
    //     </div>
    //   </div>
    <div className="flex flex-col w-full">
      <div className="flex flex-col w-full relative">
        <img
          src={IMAGE_URL + randomPoster}
          alt="random image poster"
          className="w-full h-[32rem] rounded-b-2xl object-fill object-top saturate-[300%] hue-rotate-[160deg] brightness-[70%] opacity-80 "
        />
        <div className="flex justify-center items-center h-full w-full text:sm md:text-2xl flex-col gap-4 mt-[10rem] font-bold  text-white absolute top-0">
          <div>All details about Movies, TV Shows and Actors.</div>
          <div>All information that shown to you provided py</div>
          <div>
            <a
              href="https://www.themoviedb.org/"
              target="_blank"
              className="underline"
            >
              The Movie Database
            </a>
          </div>
        </div>
      </div>
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
