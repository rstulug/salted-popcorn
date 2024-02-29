import Button from "../../ui/Button";
import CastItem, { CastProp } from "../../ui/CastItem";
import MovieItem, { MovieProp } from "../../ui/MovieItem";
import RadialChartScore from "../../ui/RadialChartScore";
import RowContainer from "../../ui/RowContainer";
import Spinner from "../../ui/Spinner";
import { IMAGE_URL } from "../../utils/constant";
import { useMovie } from "./useMovie";
import { FaCirclePlay } from "react-icons/fa6";

export default function MovieDetail() {
  const { movieDetail, isLoading } = useMovie();

  if (isLoading) return <Spinner />;

  return (
    <div className="flex flex-col gap-5">
      <div
        className="absolute  left-0 bg-gradient-to-l from-current to-[
        #38EF7D] w-full  h-[26rem]"
      ></div>
      <div className=" max-w-screen-xl mx-auto mt-[2rem] w-full z-10">
        <div className="flex flex-row gap-2  ">
          <div className="w-auto hidden md:flex">
            <img
              src={
                movieDetail.poster_path
                  ? `${IMAGE_URL}${movieDetail.poster_path}`
                  : "/default_cinema.jpg"
              }
              alt={movieDetail.title}
              className=" h-[22rem] w-auto object-fit rounded-xl "
            />
          </div>
          <div
            style={{
              backgroundImage: `linear-gradient(rgba(178, 204, 209, 0.623), rgba(113, 113, 136, 0.849)),url(${IMAGE_URL}${movieDetail.backdrop_path})`,
            }}
            className="w-full h-[22rem]  rounded-2xl bg-no-repeat bg-cover  text-center relative"
          >
            <div className="absolute bottom-0 left-0">
              <RadialChartScore score={movieDetail.vote_average} />
            </div>
            <div className="flex flex-col text-stone-900 ml-7 mt-5  w-[30%] gap-4 md:text-lg text-sm">
              <div className="font-bold text-xl py-2">
                {movieDetail.title || movieDetail.origional_title}
              </div>
              {movieDetail.tagline && (
                <div className="font-semibold italic">
                  {" "}
                  {movieDetail.tagline}
                </div>
              )}
              <div className="flex  gap-2 justify-center">
                {movieDetail.genres.map(
                  (genre: { id: number; name: string }) => (
                    <span key={genre.id}>{genre.name}</span>
                  )
                )}
              </div>
              {movieDetail.runtime && <div>{movieDetail.runtime} minutes</div>}

              <div className="flex flex-wrap  gap-1 justify-center">
                {movieDetail.production_companies.map(
                  (company: {
                    id: number;
                    logo_path: string;
                    name: string;
                    origin_country: string;
                  }) =>
                    company.logo_path && (
                      <img
                        src={`${IMAGE_URL}${company.logo_path}`}
                        className="h-[1rem]  rounded-full w-auto object-contain"
                        key={company.id}
                        alt={`${company.name}`}
                      />
                    )
                )}
              </div>

              {movieDetail.homepage && (
                <Button
                  btnName="Go to Homepage"
                  style="iconic"
                  size="regular"
                  icon={<FaCirclePlay />}
                  to={movieDetail.homepage}
                  targetOutside={true}
                />
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="mt-[2rem] text-center font-semibold text-sky-100 text-xl">
        {movieDetail.overview}
      </div>
      {movieDetail.credits.cast.length > 0 && (
        <div className="flex mt-4 flex-col">
          <span className="text-2xl font-bold mb-2 underline">Cast</span>
          <RowContainer>
            <div className="flex gap-4">
              {movieDetail.credits.cast.map((cast: CastProp["cast"]) => (
                <CastItem cast={cast} key={cast.id} />
              ))}
            </div>
          </RowContainer>
        </div>
      )}
      {movieDetail.similar.results.length > 0 && (
        <div className="flex mt-4 flex-col">
          <span className="text-2xl font-bold mb-2 underline">
            Similar Movies
          </span>
          <RowContainer>
            <div className="flex gap-4">
              {movieDetail.similar.results.map((movie: MovieProp["movie"]) => (
                <MovieItem movie={movie} key={movie.id} />
              ))}
            </div>
          </RowContainer>
        </div>
      )}
    </div>
  );
}
