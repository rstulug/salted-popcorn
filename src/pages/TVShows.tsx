import { Outlet } from "react-router";
import Button from "../ui/Button";

function TVShows() {
  return (
    <div className="flex justify-center flex-row gap-4 w-full">
      <div className="w-[20%]">Sidebar</div>
      <div className="w-[80%]">
        <div className="flex flex-row  justify-start gap-4 text-white mb-4">
          <Button
            to={"/tv-shows/airing-today"}
            style={"iconic"}
            btnName={"Airing Today"}
          />
          <Button
            to={"/tv-shows/popular"}
            style={"iconic"}
            btnName={"Popular"}
          />
          <Button to={"/tv-shows/on-tv"} style={"iconic"} btnName={"On TV"} />
          <Button
            to={"/tv-shows/top-rated"}
            style={"iconic"}
            btnName={"Top Rated"}
          />
        </div>
        <div>
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default TVShows;
