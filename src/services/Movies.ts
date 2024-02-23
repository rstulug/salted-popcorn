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

export async function getPopularMovies() {
  const res = await fetch(
    "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
    options
  );
  if (!res.ok)
    throw new Error(`An error occured during fetching popular movies`);

  const data = await res.json();
  return data;
}

export async function getUpcomingMovies() {
  const res = await fetch(
    "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
    options
  );
  if (!res.ok)
    throw new Error(`An error occured during fetching Up coming movies`);

  const data = await res.json();
  return data;
}

export async function getTopRatedMovies() {
  const res = await fetch(
    "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
    options
  );
  if (!res.ok)
    throw new Error(`An error occured during fetching top rated movies`);

  const data = await res.json();
  return data;
}
