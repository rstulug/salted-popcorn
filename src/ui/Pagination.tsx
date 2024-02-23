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
      <button>Ara Elemenalar</button>
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
