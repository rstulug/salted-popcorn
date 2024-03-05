import { NavLink, Outlet, useSearchParams } from "react-router-dom";

import { FaClapperboard, FaPersonHalfDress, FaTv } from "react-icons/fa6";

export default function Search() {
  const [searchParams] = useSearchParams();
  const searhQuery = !searchParams.get("search")
    ? ""
    : searchParams.get("search");
  return (
    <div className="flex flex-row">
      <div className="w-[30%]">
        <div>
          <ul className="flex gap-4 flex-col mt-16 border-2 border-sky-200 mx-4 py-10 rounded-3xl">
            <li>
              <NavLink
                to={`/search/movies?search=${searhQuery}`}
                className={({ isActive }) =>
                  isActive
                    ? "flex justify-center items-center gap-2 text-black bg-neutral-300 py-4 rounded-3xl mx-6 text-2xl"
                    : "flex justify-center items-center gap-2 text-white py-4 rounded-3xl mx-6 text-2xl hover:bg-neutral-400"
                }
              >
                <FaClapperboard />
                <div>in Movies</div>
              </NavLink>
            </li>
            <li>
              <NavLink
                to={`/search/tv-shows?search=${searhQuery}`}
                className={({ isActive }) =>
                  isActive
                    ? "flex justify-center items-center gap-2 text-black bg-neutral-300 py-4 rounded-3xl mx-6 text-2xl"
                    : "flex justify-center items-center gap-2 text-white py-4 rounded-3xl mx-6 text-2xl hover:bg-neutral-400"
                }
              >
                <FaTv />
                <div>in TV Shows</div>
              </NavLink>
            </li>
            <li>
              <NavLink
                to={`/search/people?search=${searhQuery}`}
                className={({ isActive }) =>
                  isActive
                    ? "flex justify-center items-center gap-2 text-black bg-neutral-300 py-4 rounded-3xl mx-6 text-2xl"
                    : "flex justify-center items-center gap-2 text-white py-4 rounded-3xl mx-6 text-2xl hover:bg-neutral-400"
                }
              >
                <FaPersonHalfDress />
                <div>in People</div>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  );
}
