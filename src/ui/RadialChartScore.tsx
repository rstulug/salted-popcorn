import {
  PolarAngleAxis,
  RadialBar,
  RadialBarChart,
  ResponsiveContainer,
} from "recharts";

export default function RadialChartScore({ score }: { score: number }) {
  if (!score) return null;
  const fillColor =
    score < 5
      ? "#DB2C17"
      : score < 7
      ? "#DBA617"
      : score < 8
      ? "#DBDB17"
      : "#2CDB17";
  const data1 = [
    { name: "Score", uv: Math.round(score * 10), fill: fillColor },
  ];
  return (
    <div className="w-14 h-14 relative">
      <ResponsiveContainer width="100%" height="100%">
        <RadialBarChart
          width={750}
          height={350}
          innerRadius="100%"
          data={data1}
          startAngle={90}
          endAngle={-270}
          barSize={12}
        >
          <PolarAngleAxis
            type="number"
            domain={[0, 100]}
            angleAxisId={0}
            tick={false}
          />
          <RadialBar
            dataKey="uv"
            background={{ fill: "#131212" }}
            isAnimationActive={false}

            // label={{
            //   position: "center",
            //   fill: "white",
            //   style: { fontSize: "14px", fontWeight: "bold" },
            // }}
          />
        </RadialBarChart>
      </ResponsiveContainer>
      <div className="w-8 h-8 absolute  top-3  left-3 bg-black rounded-full flex items-center justify-center">
        <span className="text-white text-xs  ">{Math.ceil(score * 10)}%</span>
      </div>
    </div>
  );
}
