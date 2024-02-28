import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function RowContainer({ children }: Props) {
  return (
    <div
      // style={{
      //   display: "grid",
      //   gridAutoFlow: "column",
      //   overflowX: "scroll",
      //   overflowY: "hidden",

      //   alignContent: "center",
      //   gap: "1rem",
      // }}
      className="overflow-hidden relative w-full"
    >
      <div className="flex transition ease-out duration-700 gap-4">
        {children}
      </div>
    </div>
  );
}
