import { useState } from "react";
import { MOVIE_GENRES, SORT_OPTIONS } from "../utils/constant";
import Select from "react-select";
import "rc-slider/assets/index.css";
import RangeItem from "./RangeItem";

interface GenreProps {
  value: string | number | null;
  label: string;
}

export default function MovieFilter() {
  const genreOptions = MOVIE_GENRES.genres.map((genre) => {
    return { value: genre.id, label: genre.name };
  });

  const sortOptions = SORT_OPTIONS.options;

  const [selectedGenres, setSelectedGenres] = useState<readonly GenreProps[]>();
  const [selectedSortBy, setSelectedSortBy] = useState<GenreProps | null>();
  const [selectedUserScore, setSelectedUserScore] = useState<number | number[]>(
    [0, 100]
  );
  const [selectedDuration, setSelectedDuration] = useState<number | number[]>(
    400
  );

  console.log(selectedUserScore);

  console.log(selectedGenres);
  console.log(selectedSortBy);
  console.log(selectedDuration);

  return (
    <div className="md:flex flex-col gap-4 w-full  px-2 text-black mt-20 hidden">
      <div className="border-2 border-sky-200 py-3 rounded-xl px-2">
        <div className="text-white text-xl"> Sort by</div>
        <Select
          options={sortOptions}
          isSearchable={true}
          onChange={(selected: GenreProps | null) =>
            setSelectedSortBy(selected)
          }
        />
      </div>
      <div className="border-2 border-sky-200 py-3 rounded-xl px-2">
        <div className="text-white text-xl"> Genres</div>
        <Select
          options={genreOptions}
          isMulti={true}
          isSearchable={true}
          onChange={(selected: readonly GenreProps[]) =>
            setSelectedGenres(selected)
          }
        />
      </div>

      <div className="border-2 border-sky-200 py-3 rounded-xl px-2 relative">
        <div className="text-white text-xl"> User Score</div>
        <RangeItem
          value={selectedUserScore}
          setValue={setSelectedUserScore}
          min={0}
          max={100}
          range={true}
          markNum={5}
          showingName="Score"
        />
      </div>
      <div className="border-2 border-sky-200 py-3 rounded-xl px-2 relative">
        <div className="text-white text-xl"> Duration</div>
        <RangeItem
          value={selectedDuration}
          setValue={setSelectedDuration}
          min={0}
          max={400}
          range={false}
          markNum={5}
          showingName="Duration"
        />
      </div>
    </div>
  );
}
