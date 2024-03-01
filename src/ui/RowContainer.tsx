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
      // className=" grid-flow-col overflow-x-auto grid  w-full overflow-y-hidden gap-4"
      className="flex flex-row overflow-hidden flex-wrap"
    >
      {children}
    </div>
  );
}
