import Spinner from "../../ui/Spinner";
import { IMAGE_URL } from "../../utils/constant";
import { useMovie } from "./useMovie";

export default function MovieDetail() {
  const { movieDetail, isLoading } = useMovie();
  console.log(movieDetail);
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
                src={`${IMAGE_URL}${movieDetail.poster_path}`}
                alt={movieDetail.title}
                className=" h-[25rem] w-auto object-fit rounded-xl"
              />
            </div>
            <div
              style={{
                backgroundImage: `linear-gradient(rgba(178, 204, 209, 0.623), rgba(113, 113, 136, 0.849)),url(${IMAGE_URL}${movieDetail.backdrop_path})`,
              }}
              className="w-full h-[25rem]  rounded-2xl bg-no-repeat bg-cover"
            >
              <div className="flex flex-col text-stone-900 ml-7 mt-5  w-[30%] gap-4 md:text-lg text-sm">
                <div className="font-bold text-xl py-2 text-center">
                  {movieDetail.title || movieDetail.origional_title}
                </div>
                {movieDetail.tagline && (
                  <div>Tagline: {movieDetail.tagline}</div>
                )}
                <div className="flex  gap-2 ">
                  Genre:
                  {movieDetail.genres.map(
                    (genre: { id: number; name: string }) => (
                      <span key={genre.id}>{genre.name}</span>
                    )
                  )}
                </div>

                <div className="flex flex-col justify-center">
                  Production Companies:
                  <div className="flex flex-row py-2 gap-1">
                    {movieDetail.production_companies.map(
                      (company: {
                        id: number;
                        logo_path: string;
                        name: string;
                        origin_country: string;
                      }) => (
                        <img
                          src={`${IMAGE_URL}${company.logo_path}`}
                          className="h-[1rem]  rounded-full w-auto object-contain"
                          key={company.id}
                          alt={`${company.name}`}
                        />
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-[30rem] text-center font-semibold text-sky-100">
        {movieDetail.overview}
      </div>
    </div>
  );
}
