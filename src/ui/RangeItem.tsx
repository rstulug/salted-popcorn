import Slider from "rc-slider";
import { useEffect, useRef, useState } from "react";

interface RangeProps {
  value: number | number[] | undefined;
  setValue: React.Dispatch<React.SetStateAction<number | number[]>>;
  min: number;
  max: number;
  range: boolean;
  markNum: number;
  showingName: string;
}

export default function RangeItem({
  value,
  setValue,
  min,
  max,
  range,
  markNum,
  showingName,
}: RangeProps) {
  const [showNotification, setShowNotification] = useState<boolean>(false);
  const ref = useRef(value);

  const marksItems = Array.from(
    { length: markNum + 1 },
    (_, i) => i * (max / markNum)
  );

  const marks: {
    [key: number]: React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement>,
      HTMLElement
    >;
  } = {};

  for (const i of marksItems) {
    marks[i] = <i className="text-white not-italic">{i}</i>;
  }

  useEffect(
    function () {
      if (ref.current !== value) {
        setShowNotification(true);
        setTimeout(() => setShowNotification(false), 1000);
      }
    },
    [value]
  );

  return (
    <div>
      {showNotification ? (
        Array.isArray(value) ? (
          <div className="text-white absolute top-5 left-11 text-sm bg-gray-500 py-1 px-2 z-10 rounded-lg">
            {showingName} between {value[0]} - {value[1]}
          </div>
        ) : (
          <div className="text-white absolute top-5 left-11 text-sm bg-gray-500 py-1 px-2 z-10 rounded-lg">
            {showingName} to {value}
          </div>
        )
      ) : (
        ""
      )}
      <Slider
        min={min}
        max={max}
        step={5}
        range={range}
        defaultValue={value}
        allowCross={false}
        dotStyle={{ backgroundColor: "red" }}
        activeDotStyle={{ backgroundColor: "black" }}
        ariaLabelForHandle={"üstünde"}
        trackStyle={{ backgroundColor: "red" }}
        marks={marks}
        className="pb-5 pt-4 w-[95%] mx-auto"
        onChange={(value: number | number[]) => setValue(value)}
      />
    </div>
  );
}
