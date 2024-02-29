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
    <div className="w-16 h-16">
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
            background={{ fill: "#2e2c2c" }}
            isAnimationActive={false}
            // label={{
            //   position: "center",
            //   fill: "white",
            //   style: { fontSize: "14px", fontWeight: "bold" },
            // }}
          />
          <text
            x="50%"
            y="50%"
            dy={+5}
            style={{
              fontSize: "14px",
              fontWeight: "bold",
              fill: "white",
            }}
            textAnchor="middle"
          >
            {Math.round(score * 10)}%
          </text>
        </RadialBarChart>
      </ResponsiveContainer>
    </div>
  );
}
