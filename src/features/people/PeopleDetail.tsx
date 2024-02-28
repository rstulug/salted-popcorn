import { useState } from "react";
import Spinner from "../../ui/Spinner";
import { IMAGE_URL } from "../../utils/constant";
import { usePeopleDetail } from "./usePeopleDetail";
import { FaAnglesRight, FaAnglesLeft } from "react-icons/fa6";

export default function PeopleDetail() {
  const { peopleDetail, isLoading } = usePeopleDetail();
  const [showMore, setShowMore] = useState<boolean>(
    peopleDetail?.biography?.length > 400
  );

  const peopleBiography = showMore
    ? peopleDetail?.biography.slice(0, 400)
    : peopleDetail?.biography;

  if (isLoading) return <Spinner />;
  console.log(peopleDetail);
  return (
    <div className="flex flex-col gap-5">
      <div
        className="absolute  left-0 bg-gradient-to-l from-current to-[
        #38EF7D] w-full py-8"
      >
        <div className="max-w-screen-xl mx-auto">
          <div className=" flex flex-row justify-start gap-4">
            <div className="w-[20%] h-[20rem]">
              <img
                src={
                  peopleDetail.profile_path
                    ? `${IMAGE_URL}${peopleDetail.profile_path}`
                    : "/default_user.jpg"
                }
                alt={`${peopleDetail.name}`}
                className="w-full h-[20rem] object-fit rounded-xl"
              />
            </div>
            <div className="w-[70%] text-stone-900 flex flex-col gap-5">
              <div className="font-bold text-3xl ">{peopleDetail.name}</div>
              <div>{peopleDetail.birthday}</div>
              <div>{peopleDetail.place_of_birth}</div>
              <div>
                {peopleBiography}
                {
                  <button
                    onClick={() => setShowMore(() => !showMore)}
                    className="font-bold ml-2  border-sky-500 px-1 rounded-xl align-middle"
                    title={showMore ? "Read More" : "Read Less"}
                  >
                    {showMore ? <FaAnglesRight /> : <FaAnglesLeft />}
                  </button>
                }
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-[25rem]">Filmler buraya</div>
    </div>
  );
}
