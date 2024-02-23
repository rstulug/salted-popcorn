import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

function GridContainer({ children }: Props) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(150px,1fr)",
        gap: "25px",
      }}
    >
      {children}
    </div>
  );
}

export default GridContainer;
