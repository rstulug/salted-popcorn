import { Outlet } from "react-router-dom";

export default function Search() {
  return (
    <div className="flex flex-row">
      <div className="w-[30%]">Farklı seçenek butonları </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
}
