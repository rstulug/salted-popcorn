import { Outlet, useOutlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header..";
import Dashboard from "../pages/Dashboard";

export default function AppLayout() {
  const outlet = useOutlet();
  return (
    <div className=" w-full  from-gray-900 to-gray-600 bg-gradient-to-tr overflow-auto min-h-screen relative">
      <div className="  max-w-screen-xl flex flex-col text-sky-300 font-['ui-sans-serif'] sm:text-lg text-sm justify-center mx-auto mb-8">
        <div className="flex justify-center  sm:h-12 items-center h-auto border-sky-700 border-2 px-2 rounded-md shadow-sm shadow-gray-500 mb-4 py-4">
          <Header />
        </div>
        <div>{outlet ? <Outlet /> : <Dashboard />}</div>
      </div>
      <div className="fixed bottom-0 left-0 flex justify-center items-center w-full text-lg text-sky-400">
        <Footer />
      </div>
    </div>
  );
}
