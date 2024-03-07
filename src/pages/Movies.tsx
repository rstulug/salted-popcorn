import { Outlet, useNavigate, useOutlet } from "react-router-dom";
import MovieFilter from "../ui/MovieFilter";
import { useEffect } from "react";

export default function Movies() {
  const outlet = useOutlet();
  const navigate = useNavigate();

  useEffect(
    function () {
      if (!outlet) navigate("/");
    },
    [navigate, outlet]
  );
  return (
    <div className="flex flex-row w-full">
      <div className="w-[20%]">
        <MovieFilter />
      </div>
      <div className="flex flex-1 flex-col">
        <Outlet />
      </div>
    </div>
  );
}
