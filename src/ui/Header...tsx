import { Link, useNavigate, useSearchParams } from "react-router-dom";
import Logo from "./Logo";
import {
  FaClapperboard,
  FaTv,
  FaPersonHalfDress,
  FaMagnifyingGlass,
  FaXmark,
} from "react-icons/fa6";
import ToggleMenus from "./ToggleList";

import { useState } from "react";
import { IconContext } from "react-icons";

function Header() {
  const [showSearch, setShowSearch] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  function handleSearh(to: string) {
    navigate(`/search/${to}`);
    searchParams.set("search", searchQuery);
    setSearchParams(searchParams);
    setSearchQuery("");
  }

  return (
    <div className="w-full flex sm:justify-between text-white flex-col sm:flex-row gap-4 sm:gap-0 font-semibold items-center ">
      <div className="flex gap-2 items-center flex-col sm:flex-row w-4/12">
        <Link to={"/"}>
          <Logo />
        </Link>
      </div>
      <div className="flex sm:flex-row gap-8 flex-col ">
        <ToggleMenus>
          <div
            className="flex flex-row gap-2 justify-center items-center relative cursor-pointer w-full"
            id="button-movies"
          >
            <FaClapperboard />
            Movies
          </div>
          <ToggleMenus.List id="button-movies">
            <ToggleMenus.ListItem
              where="Now Playing"
              to="/movies/now-playing"
            />
            <ToggleMenus.ListItem where="Popular" to="/movies/popular" />
            <ToggleMenus.ListItem where="Upcoming" to="/movies/upcoming" />
            <ToggleMenus.ListItem where="Top Rated" to="/movies/top-rated" />
          </ToggleMenus.List>
        </ToggleMenus>
        <ToggleMenus>
          <div
            className="flex flex-row gap-2 justify-center items-center relative cursor-pointer"
            id="button-tvshows"
          >
            <FaTv />
            TV Shows
          </div>
          <ToggleMenus.List id="button-tvshows">
            <ToggleMenus.ListItem
              where="Airing Today"
              to="/tv-shows/airing-today"
            />
            <ToggleMenus.ListItem where="Popular" to="/tv-shows/popular" />
            <ToggleMenus.ListItem where="On TV" to="/tv-shows/on-tv" />
            <ToggleMenus.ListItem where="Top Rated" to="/tv-shows/top-rated" />
          </ToggleMenus.List>
        </ToggleMenus>

        <ToggleMenus>
          <div
            className="flex flex-row gap-2 justify-center items-center relative cursor-pointer"
            id="button-people"
          >
            <FaPersonHalfDress />
            People
          </div>
          <ToggleMenus.List id="button-people">
            <ToggleMenus.ListItem where="Popular People" to="/people" />
          </ToggleMenus.List>
        </ToggleMenus>
      </div>

      <div className="sm:justify-end flex w-4/12 justify-center items-center">
        {showSearch && (
          <div className="w-full relative">
            <input
              type="text"
              placeholder="Search for movie, tv show or person"
              className="rounded-lg bg-gray-200 outline-none text-black placeholder:pl-6 pl-4 w-full placeholder:text-gray-500 transition-all"
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
        )}

        {showSearch ? (
          <IconContext.Provider value={{ size: "1.5rem" }}>
            <FaXmark onClick={() => setShowSearch(false)} />
          </IconContext.Provider>
        ) : (
          <IconContext.Provider value={{ size: "1.5rem" }}>
            <FaMagnifyingGlass onClick={() => setShowSearch(true)} />
          </IconContext.Provider>
        )}
      </div>
    </div>
  );
}

export default Header;
