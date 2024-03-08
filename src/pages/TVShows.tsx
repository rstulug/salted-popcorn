import { useEffect } from "react";
import { Outlet, useNavigate, useOutlet } from "react-router-dom";
import MovieFilter from "../ui/MovieFilter";

export default function TVShows() {
  const outlet = useOutlet();
  const navigate = useNavigate();

  useEffect(
    function () {
      if (!outlet) navigate("/");
    },
    [navigate, outlet]
  );
  return (
    <div className="flex flex-row w-full gap-4">
      <div className="w-[20%]">
        <MovieFilter />
      </div>
      <div className="flex flex-1 flex-col">
        <Outlet />
      </div>
    </div>
  );
}
