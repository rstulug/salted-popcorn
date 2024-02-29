import { ReactNode, createContext, useContext, useState } from "react";
import { createPortal } from "react-dom";
import { Link } from "react-router-dom";

interface ChildrenProp {
  children: ReactNode;
  id?: string;
}
interface ToggleContextType {
  open(): void;
  close(): void;
  showToggle: boolean;
}

const ToggleContext = createContext<ToggleContextType | null>(null);

function ToggleMenus({ children }: ChildrenProp) {
  const [showToggle, setShowToggle] = useState<boolean>(false);

  const open = () => setShowToggle(true);
  const close = () => setShowToggle(false);
  return (
    <ToggleContext.Provider value={{ open, close, showToggle }}>
      <div onMouseEnter={open} onMouseLeave={close}>
        {children}
      </div>
    </ToggleContext.Provider>
  );
}

function List({ children, id }: ChildrenProp) {
  const { showToggle, open, close } = useContext(
    ToggleContext
  ) as ToggleContextType;
  if (showToggle)
    return createPortal(
      <ul
        className="flex flex-col gap-2 bg-gray-200 py-3 px-1 justify-center absolute left-0 z-50 w-32 top-6 ease-out duration-700 transition mt-0 rounded-xl"
        onMouseEnter={open}
        onMouseLeave={close}
      >
        {children}
      </ul>,
      document.getElementById(id!)!
    );
}

function ListItem({ where, to }: { where: string; to: string }) {
  return (
    <Link to={to} className=" text-black text-sm">
      {where}
    </Link>
  );
}

ToggleMenus.List = List;
ToggleMenus.ListItem = ListItem;
export default ToggleMenus;
