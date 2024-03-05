const options = {
  method: "GET",
  headers: {
    accept: "application/json",

    Authorization: import.meta.env.VITE_TMDB_AUTHORIZATION_KEY,
  },
};

export async function getNowPlayingMovies(curPage: number) {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=${curPage}`,
    options
  );
  if (!res.ok)
    throw new Error("An error occured during fetching now playing movies");
  const data = await res.json();

  return data;
}

export async function getPopularMovies(curPage: number) {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/popular?language=en-US&page=${curPage}`,
    options
  );
  if (!res.ok)
    throw new Error(`An error occured during fetching popular movies`);

  const data = await res.json();
  return data;
}

export async function getUpcomingMovies(curPage: number) {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=${curPage}`,
    options
  );
  if (!res.ok)
    throw new Error(`An error occured during fetching Up coming movies`);

  const data = await res.json();
  return data;
}

export async function getTopRatedMovies(curPage: number) {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=${curPage}`,
    options
  );
  if (!res.ok)
    throw new Error(`An error occured during fetching top rated movies`);

  const data = await res.json();
  return data;
}

export async function getMovieById(movieId: string | undefined) {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?language=en-US&append_to_response=credits,recommendations,videos`,
    options
  );
  if (!res.ok)
    throw new Error("An error occured during fetching movie details");

  const data = await res.json();
  return data;
}

export async function getTrendMovies() {
  const res = await fetch(
    "https://api.themoviedb.org/3/trending/movie/week?language=en-US",
    options
  );

  if (!res.ok)
    throw new Error("An error occured during fetching trending movies");

  const data = await res.json();

  return data;
}

export async function getSearchMovies(
  searchQuery: string | null,
  curPage: number
) {
  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?query=${searchQuery}&include_adult=false&language=en-US&page=${curPage}`,
    options
  );

  if (!res.ok) throw new Error("An error occured during searching movies");

  const data = await res.json();

  return data;
}
