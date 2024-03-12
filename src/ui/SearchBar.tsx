import { useState } from "react";
import { FaClapperboard, FaPersonHalfDress, FaTv } from "react-icons/fa6";
import { useNavigate, useSearchParams } from "react-router-dom";

export default function SearchBar({
  setShowSearch,
  height,
}: {
  setShowSearch: React.Dispatch<React.SetStateAction<boolean>>;
  height: string;
}) {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  function handleSearh(to: string) {
    navigate(`/search/${to}`);
    searchParams.set("search", searchQuery);
    searchParams.set("page", "1");
    setSearchParams(searchParams);
    setSearchQuery("");
    setShowSearch(false);
  }
  return (
    <div>
      <input
        type="text"
        placeholder="Search for movie, tv show or person"
        className="rounded-xl bg-gray-200 outline-none text-black placeholder:pl-6 pl-4 w-full placeholder:text-gray-500 transition-all "
        style={{ height: `${height}` }}
        onChange={(e) => {
          setSearchQuery(e.target.value);
        }}
      />
      {searchQuery && (
        <ul className="absolute top-6 w-full left-0 bg-gray-200 z-50 text-black">
          <li
            onClick={() => handleSearh("movies")}
            className="py-2 pl-2 hover:bg-gray-400 rounded-lg cursor-pointer flex flex-row items-center gap-2"
          >
            {" "}
            <FaClapperboard />
            {`${searchQuery} in Movies`}
          </li>
          <li
            onClick={() => handleSearh("tv-shows")}
            className="py-2 pl-2 hover:bg-gray-400 rounded-lg cursor-pointer flex flex-row items-center gap-2"
          >
            {" "}
            <FaTv />
            {`${searchQuery} in TV Shows`}
          </li>
          <li
            onClick={() => handleSearh("people")}
            className="py-2 pl-2 hover:bg-gray-400 rounded-lg cursor-pointer flex flex-row items-center gap-2"
          >
            {" "}
            <FaPersonHalfDress />
            {`${searchQuery} in Person`}
          </li>
        </ul>
      )}
    </div>
  );
}
