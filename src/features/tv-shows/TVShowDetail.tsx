import { FaCirclePlay } from "react-icons/fa6";
import Button from "../../ui/Button";
import Spinner from "../../ui/Spinner";
import { IMAGE_URL } from "../../utils/constant";
import { useTVShow } from "./useTVShow";

import RadialChartScore from "../../ui/RadialChartScore";
import SliderItem from "../../ui/SliderItem";
import TrailerVideos from "../../ui/TrailerVideos";
import EmptyPage from "../../ui/EmptyPage";

export default function TVShowDetail() {
  const { tvShowDetail, isLoading, error } = useTVShow();

  if (isLoading) return <Spinner />;
  if (error) return <EmptyPage />;

  const trailerVideos = tvShowDetail.videos.results
    .filter(
      (video: { name: string; site: string }) =>
        video.name.toLowerCase().includes("trailer") &&
        video.site.toLowerCase() === "youtube"
    )
    .map((url: { key: string }) => url.key);

  return (
    <div className="flex flex-col gap-5">
      <div
        className="absolute  left-0 bg-gradient-to-l from-current to-[
    #38EF7D] w-full py-8 h-[26rem]"
      ></div>
      <div className=" max-w-screen-xl mx-auto w-full mt-[2rem] z-10">
        <div className="flex flex-row gap-2">
          <div className="w-auto">
            <img
              src={
                tvShowDetail.poster_path
                  ? `${IMAGE_URL}${tvShowDetail.poster_path}`
                  : "/default_cinema.jpg"
              }
              alt={tvShowDetail.name}
              className=" h-[22rem] w-auto object-fit rounded-xl "
            />
          </div>
          <div
            style={{
              backgroundImage: `linear-gradient(rgba(178, 204, 209, 0.623), rgba(113, 113, 136, 0.849)),url(${IMAGE_URL}${tvShowDetail.backdrop_path})`,
            }}
            className="w-full h-[22rem]  rounded-2xl bg-no-repeat bg-cover relative text-center"
          >
            <div className="absolute bottom-0 left-0">
              <RadialChartScore score={tvShowDetail.vote_average} />
            </div>
            <div className="flex flex-col text-stone-900 ml-7 mt-2  w-[50%] gap-4 md:text-lg text-sm">
              <div className="font-bold text-xl py-2 text-center">
                {tvShowDetail.name || tvShowDetail.origional_name}
              </div>
              {tvShowDetail.tagline && (
                <div>Tagline: {tvShowDetail.tagline}</div>
              )}
              <div className="flex  gap-1  justify-center">
                Genre:
                {tvShowDetail.genres.map(
                  (genre: { id: number; name: string }) => (
                    <span key={genre.id}>{genre.name}</span>
                  )
                )}
              </div>
              {tvShowDetail.episode_run_time.length > 0 && (
                <div>Runtime: {tvShowDetail.episode_run_time[0]} minutes</div>
              )}
              {tvShowDetail.number_of_episodes && (
                <div>Number of Episodes: {tvShowDetail.number_of_episodes}</div>
              )}
              {tvShowDetail.number_of_seasons && (
                <div>Number of Seasons: {tvShowDetail.number_of_seasons}</div>
              )}

              {tvShowDetail.homepage && (
                <div className="w-[60%] mx-auto">
                  <Button
                    btnName="Go to Homepage"
                    style="iconic"
                    size="regular"
                    icon={<FaCirclePlay />}
                    to={tvShowDetail.homepage}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="mt-[2rem] text-center font-semibold text-sky-100">
        {tvShowDetail.overview}
      </div>
      <div className="w-[70%] mx-auto">
        {trailerVideos.length > 0 && <TrailerVideos urls={trailerVideos} />}
      </div>
      {tvShowDetail.credits.cast.length > 0 && (
        <div className="flex mt-4 flex-col">
          <span className="text-2xl font-bold mb-2 underline">Cast</span>
          <SliderItem data={tvShowDetail.credits.cast} type="cast" />
        </div>
      )}
      {tvShowDetail.recommendations.results.length > 0 && (
        <div className="flex mt-4 flex-col">
          <span className="text-2xl font-bold mb-2 underline">
            Recommendations
          </span>
          <SliderItem
            data={tvShowDetail.recommendations.results}
            type="tvshow"
          />
        </div>
      )}
    </div>
  );
}
