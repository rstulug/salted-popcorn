import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

function GridContainer({ children }: Props) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(11rem,1fr)",
        gap: "1rem",
      }}
      className="mt-2"
    >
      {children}
    </div>
  );
}

export default GridContainer;
