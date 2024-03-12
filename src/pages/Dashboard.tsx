import { useState } from "react";
import { useTrendMovies } from "../features/dashboard/useTrendMovies";
import { useTrendTVShows } from "../features/dashboard/useTrendTVShows";
import SliderItem from "../ui/SliderItem";
import Spinner from "../ui/Spinner";
import { IMAGE_URL } from "../utils/constant";
import SearchBar from "../ui/SearchBar";

function Dashboard() {
  const { trendMovies, isLoading: isLoadingMovies } = useTrendMovies();
  const { trendTVShows, isLoading: isLoadingTVShows } = useTrendTVShows();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, setShowSearch] = useState<boolean>(true);

  if (isLoadingMovies || isLoadingTVShows) return <Spinner />;
  const randomPoster =
    trendMovies.results[Math.floor(Math.random() * trendMovies.results.length)]
      ?.backdrop_path;
  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-col w-full relative ">
        <img
          src={IMAGE_URL + randomPoster}
          alt="random image poster"
          className="w-full h-[32rem] rounded-b-2xl object-fill grayscale saturate-[1000%] brightness-[200%]"
        />
        <div className="w-full h-[32rem] absolute top-0 left-0  z-20  opacity-[75%] rounded-b-2xl  bg-[#032541]"></div>
        <div className="flex justify-center items-center h-full w-full text:sm md:text-3xl flex-col gap-4 mt-[2rem] font-bold  absolute top-0 text-white z-20">
          <div>All details about Movies, TV Shows and Actors</div>
          <div className="w-[80%] text-xl relative">
            <SearchBar setShowSearch={setShowSearch} height="3rem" />
          </div>
          <div>All information that shown to you provided py</div>
          <div>
            <a
              href="https://www.themoviedb.org/"
              target="_blank"
              className="underline text-md"
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
