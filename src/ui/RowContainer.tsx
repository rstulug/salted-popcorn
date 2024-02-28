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
      className=" grid-flow-col overflow-scroll grid overflow-y-hidden overflow-x-auto"
    >
      {children}
    </div>
  );
}
