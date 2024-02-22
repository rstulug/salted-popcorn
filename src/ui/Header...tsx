import { Link } from "react-router-dom";
import Logo from "./Logo";
import { FaClapperboard, FaTv, FaPersonHalfDress } from "react-icons/fa6";
import Button from "./Button";

function Header() {
  return (
    <div className="w-full flex sm:justify-between text-white flex-col sm:flex-row gap-4 sm:gap-0 font-semibold items-center ">
      <div className="flex gap-2 items-center flex-col sm:flex-row w-3/12">
        <Link to={"/"}>
          <Logo />
        </Link>
      </div>
      <div className="flex sm:flex-row gap-4 flex-col">
        <Button
          btnName="Movies"
          to={"/movies"}
          style="iconic"
          icon={<FaClapperboard />}
        />
        <Button
          btnName="Tv Shows"
          to={"/tv-shows"}
          style="iconic"
          icon={<FaTv />}
        />
        <Button
          btnName="People"
          to={"/people"}
          style="iconic"
          icon={<FaPersonHalfDress />}
        />
      </div>

      <div className="sm:justify-end flex w-3/12 justify-center">Search</div>
    </div>
  );
}

export default Header;
