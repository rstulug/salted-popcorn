import { useState } from "react";
import { TVSHOV_GENRES, SORT_OPTIONS } from "../utils/constant";
import Select from "react-select";
import "rc-slider/assets/index.css";
import RangeItem from "./RangeItem";
import Button from "./Button";
import { useNavigate, useSearchParams } from "react-router-dom";

interface GenreProps {
  value: string | number | null;
  label: string;
}

export default function TVShowFilter() {
  const navigate = useNavigate();
  const genreOptions = TVSHOV_GENRES.genres.map((genre) => {
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

  const [searchParams, setSearchParams] = useSearchParams();

  function handleClick() {
    if (selectedSortBy?.value) {
      searchParams.set("sort_by", `${selectedSortBy.value}`);
    } else {
      searchParams.delete("sort_by");
    }

    if (selectedGenres && selectedGenres?.length > 0) {
      const genres = selectedGenres?.map((genre) => genre.value).join(",");
      searchParams.set("with_genres", `${genres}`);
    } else {
      searchParams.delete("with_genres");
    }

    if (selectedUserScore && Array.isArray(selectedUserScore)) {
      searchParams.set("vote_average.gte", `${selectedUserScore[0] / 10}`);

      searchParams.set("vote_average.lte", `${selectedUserScore[1] / 10}`);
    } else {
      searchParams.delete("vote_average.gte");
      searchParams.delete("vote_average.lte");
    }

    if (selectedDuration) {
      searchParams.set("with_runtime.lte", `${selectedDuration}`);
    } else {
      searchParams.delete("with_runtime.lte");
    }

    navigate("/tv-shows/discover");
    searchParams.set("page", "1");
    setSearchParams(searchParams);
  }

  return (
    <div className="md:flex flex-col gap-4 w-full  px-2 text-black mt-20 hidden border-2 border-sky-500 rounded-xl py-8">
      <div className="w-full text-center text-2xl text-sky-100">
        Discover Movies
      </div>
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
          showingName="Duration (minutes)"
        />
      </div>

      <Button
        btnName="Let's Discover"
        style="green"
        size="large"
        onClick={() => handleClick()}
      />
    </div>
  );
}
