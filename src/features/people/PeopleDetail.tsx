import { useState } from "react";
import Spinner from "../../ui/Spinner";
import { IMAGE_URL } from "../../utils/constant";
import { usePeopleDetail } from "./usePeopleDetail";
import { FaAnglesRight, FaAnglesLeft } from "react-icons/fa6";

import SliderItem from "../../ui/SliderItem";

export default function PeopleDetail() {
  const { peopleDetail, isLoading } = usePeopleDetail();
  const [showMore, setShowMore] = useState<boolean>(false);

  const peopleBiography = showMore
    ? peopleDetail?.biography
    : peopleDetail?.biography.slice(0, 400);

  if (isLoading) return <Spinner />;

  return (
    <div className="flex flex-col gap-5">
      <div className="max-w-screen-xl mx-auto w-full mt-[2rem] z-10">
        <div className=" flex flex-row justify-start gap-4">
          <div className="w-[20%] h-[22rem]">
            <img
              src={
                peopleDetail.profile_path
                  ? `${IMAGE_URL}${peopleDetail.profile_path}`
                  : "/default_user.jpg"
              }
              alt={`${peopleDetail.name}`}
              className="w-full h-[22rem] object-cover rounded-xl "
            />
          </div>
          <div className="w-[70%] text-sky-200 flex flex-col gap-5">
            <div className="font-bold text-3xl ">{peopleDetail.name}</div>
            <div>{peopleDetail.birthday}</div>
            <div>{peopleDetail.place_of_birth}</div>
            <div>
              {peopleBiography}
              {peopleDetail.biography.length >= peopleBiography.length && (
                <button
                  onClick={() => setShowMore(() => !showMore)}
                  className="font-bold ml-2  border-sky-500 px-1 rounded-xl align-middle"
                  title={showMore ? "Read Less" : "Read More"}
                >
                  {showMore ? <FaAnglesLeft /> : <FaAnglesRight />}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="mt-[2rem] flex flex-col gap-5">
        {peopleDetail.movie_credits.cast.length > 0 && (
          <div>
            <span className="text-2xl font-bold mb-2 underline">Movies</span>
            <SliderItem data={peopleDetail.movie_credits.cast} type="movie" />
          </div>
        )}
        <div>
          {peopleDetail.tv_credits.cast.length > 0 && (
            <div>
              <span className="text-2xl font-bold mb-2 underline">
                TV Shows
              </span>
              <SliderItem data={peopleDetail.tv_credits.cast} type="tvshow" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
