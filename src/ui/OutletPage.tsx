import { Outlet } from "react-router-dom";

export default function OutletPage() {
  return (
    <div className="flex w-full flex-row">
      <div className="w-[25%] hidden md:flex">Sidebar</div>
      <div className="w-[75%]">
        <Outlet />
      </div>
    </div>
  );
}
