import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

function GridContainer({ children }: Props) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(180px,1fr)",
        gap: "15px",
      }}
    >
      {children}
    </div>
  );
}

export default GridContainer;
