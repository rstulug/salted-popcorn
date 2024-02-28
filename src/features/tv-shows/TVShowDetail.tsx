import { FaCirclePlay } from "react-icons/fa6";
import Button from "../../ui/Button";
import Spinner from "../../ui/Spinner";
import { IMAGE_URL } from "../../utils/constant";
import { useTVShow } from "./useTVShow";
import RowContainer from "../../ui/RowContainer";
import CastItem, { CastProp } from "../../ui/CastItem";
import TVShowItem, { TVShowProp } from "../../ui/TVShowItem";

export default function TVShowDetail() {
  const { tvShowDetail, isLoading } = useTVShow();

  if (isLoading) return <Spinner />;

  return (
    <div className="flex flex-col gap-5">
      <div
        className="absolute  left-0 bg-gradient-to-l from-current to-[
    #38EF7D] w-full py-8"
      >
        <div className=" max-w-screen-xl mx-auto">
          <div className="flex flex-row gap-2">
            <div className="w-auto">
              <img
                src={
                  tvShowDetail.poster_path
                    ? `${IMAGE_URL}${tvShowDetail.poster_path}`
                    : "/default_cinema.jpg"
                }
                alt={tvShowDetail.name}
                className=" h-[25rem] w-auto object-fit rounded-xl"
              />
            </div>
            <div
              style={{
                backgroundImage: `linear-gradient(rgba(178, 204, 209, 0.623), rgba(113, 113, 136, 0.849)),url(${IMAGE_URL}${tvShowDetail.backdrop_path})`,
              }}
              className="w-full h-[25rem]  rounded-2xl bg-no-repeat bg-cover"
            >
              <div className="flex flex-col text-stone-900 ml-7 mt-5  w-[30%] gap-4 md:text-lg text-sm">
                <div className="font-bold text-xl py-2 text-center">
                  {tvShowDetail.name || tvShowDetail.origional_name}
                </div>
                {tvShowDetail.tagline && (
                  <div>Tagline: {tvShowDetail.tagline}</div>
                )}
                <div className="flex  gap-1 text-nowrap">
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
                  <div>
                    Number of Episodes: {tvShowDetail.number_of_episodes}
                  </div>
                )}
                {tvShowDetail.number_of_seasons && (
                  <div>Number of Seasons: {tvShowDetail.number_of_seasons}</div>
                )}

                {tvShowDetail.homepage && (
                  <Button
                    btnName="Go to Homepage"
                    style="iconic"
                    size="regular"
                    icon={<FaCirclePlay />}
                    to={tvShowDetail.homepage}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-[30rem] text-center font-semibold text-sky-100">
        {tvShowDetail.overview}
      </div>
      {tvShowDetail.credits.cast.length > 0 && (
        <div className="flex mt-4 flex-col">
          <span className="text-2xl font-bold mb-2 underline">Cast</span>
          <RowContainer>
            <div className="flex gap-4">
              {tvShowDetail.credits.cast.map((cast: CastProp["cast"]) => (
                <CastItem cast={cast} key={cast.id} />
              ))}
            </div>
          </RowContainer>
        </div>
      )}
      {tvShowDetail.similar.results.length > 0 && (
        <div className="flex mt-4 flex-col">
          <span className="text-2xl font-bold mb-2 underline">
            Similar Tv Shows
          </span>
          <RowContainer>
            <div className="flex gap-4">
              {tvShowDetail.similar.results.map(
                (tvshow: TVShowProp["tvshow"]) => (
                  <TVShowItem tvshow={tvshow} key={tvshow.id} />
                )
              )}
            </div>
          </RowContainer>
        </div>
      )}
    </div>
  );
}
