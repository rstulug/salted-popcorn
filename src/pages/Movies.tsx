import { Outlet } from "react-router";
import Button from "../ui/Button";

function Movies() {
  return (
    <div className="flex justify-center flex-row gap-4 w-full">
      <div className="w-[25%]">Sidebar</div>
      <div className="w-[75%]">
        <div className="flex flex-row  justify-start gap-4 text-white mb-4">
          <Button
            to={"/movies/now-playing"}
            style={"iconic"}
            btnName="Now Playing"
          />
          <Button to={"/movies/popular"} style={"iconic"} btnName="Popular" />
          <Button to={"/movies/upcoming"} style={"iconic"} btnName="Upcoming" />
          <Button
            to={"/movies/top-rated"}
            style={"iconic"}
            btnName="Top Rated"
          />
        </div>
        <div>
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Movies;
