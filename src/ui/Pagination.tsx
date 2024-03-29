import {
  FaArrowLeftLong,
  FaArrowRightLong,
  FaAnglesLeft,
  FaAnglesRight,
} from "react-icons/fa6";
import { useSearchParams } from "react-router-dom";

interface PagesProps {
  pages: number;
  curPage: number;
}

export default function Pagination({ pages, curPage }: PagesProps) {
  const [searchParams, setSearchParams] = useSearchParams();

  function handleFirstPage() {
    searchParams.set("page", "1");
    setSearchParams(searchParams);
  }

  function handleLastPage() {
    searchParams.set("page", `${pages}`);
    setSearchParams(searchParams);
  }

  function handlePreviousPage() {
    searchParams.set("page", `${curPage - 1}`);
    setSearchParams(searchParams);
  }

  function handleNextPage() {
    searchParams.set("page", `${curPage + 1}`);
    setSearchParams(searchParams);
  }

  function handleClick(index: number) {
    searchParams.set("page", `${index}`);
    setSearchParams(searchParams);
  }

  return (
    <div className="flex justify-center items-center flex-row text-xl  gap-4 py-2 text-white my-6  rounded-lg mx-auto px-3">
      {curPage > 1 && (
        <button
          onClick={handleFirstPage}
          title="First Page"
          className="rounded-full bg-sky-500 p-2 "
        >
          <FaAnglesLeft />
        </button>
      )}
      {curPage > 1 && (
        <button
          onClick={handlePreviousPage}
          title="Previous Page"
          className="rounded-full bg-sky-500 p-2 "
        >
          <FaArrowLeftLong />
        </button>
      )}
      <div className="flex flex-row gap-2">
        {Array.from({ length: 9 }, (_, i) => curPage - 4 + i)
          .filter((i) => i > 0 && i <= pages)
          .map((index) => (
            <button
              className={
                "rounded-full  w-10 h-10" +
                `${index === curPage ? " bg-red-800" : " bg-sky-500"}`
              }
              onClick={() => handleClick(index)}
              key={index}
            >
              {index}
            </button>
          ))}
      </div>
      {curPage < pages && (
        <button
          onClick={handleNextPage}
          title="Next Page"
          className="rounded-full bg-sky-500 p-2 "
        >
          <FaArrowRightLong />
        </button>
      )}
      {curPage < pages && (
        <button
          onClick={handleLastPage}
          title="Last Page"
          className="rounded-full bg-sky-500 p-2 "
        >
          <FaAnglesRight />
        </button>
      )}
    </div>
  );
}
