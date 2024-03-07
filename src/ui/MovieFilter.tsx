import { useState } from "react";
import { MOVIE_GENRES, SORT_OPTIONS } from "../utils/constant";
import Select from "react-select";

interface GenreProps {
  value: string | null;
  label: string;
}

export default function MovieFilter() {
  const genreOptions = MOVIE_GENRES.genres.map((genre) => {
    return { value: genre.name.toLocaleLowerCase(), label: genre.name };
  });

  const sortOptions = SORT_OPTIONS.options;

  const [selectedGenres, setSelectedGenres] = useState<readonly GenreProps[]>();
  const [selectedSortBy, setSelectedSortBy] = useState<GenreProps | null>();

  console.log(selectedGenres);
  console.log(selectedSortBy);

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
      <div className="border-2 border-sky-200 py-3 rounded-xl px-2">
        <input
          type="range"
          max={10}
          min={1}
          name="rate"
          className="w-full"
          defaultValue={5}
        />
      </div>
    </div>
  );
}
