import { Link } from "react-router-dom";
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
import SearchBar from "./SearchBar";

function Header() {
  const [showSearch, setShowSearch] = useState<boolean>(false);

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
            <SearchBar setShowSearch={setShowSearch} height="2rem" />
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
