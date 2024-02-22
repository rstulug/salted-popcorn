const options = {
  method: "GET",
  headers: {
    accept: "application/json",

    Authorization: import.meta.env.VITE_TMDB_AUTHORIZATION_KEY,
  },
};

export async function getAiringTodayTVShows() {
  const res = await fetch(
    "https://api.themoviedb.org/3/tv/airing_today?language=en-US&page=1",
    options
  );

  if (!res.ok)
    throw new Error(`An error occured during fetching airing today TV shows`);

  const data = await res.json();
  return data;
}

export async function getonTVShows() {
  const res = await fetch(
    "https://api.themoviedb.org/3/tv/on_the_air?language=en-US&page=1",
    options
  );

  if (!res.ok) throw new Error(`An error occured during fetching on TV shows`);

  const data = await res.json();
  return data;
}

export async function getPopularTVShows() {
  const res = await fetch(
    "https://api.themoviedb.org/3/tv/popular?language=en-US&page=1",
    options
  );

  if (!res.ok)
    throw new Error(`An error occured during fetching popular TV shows`);

  const data = await res.json();
  return data;
}

export async function getTopRatedTVShows() {
  const res = await fetch(
    "https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1",
    options
  );

  if (!res.ok)
    throw new Error(`An error occured during fetching top rated TV shows`);

  const data = await res.json();
  return data;
}
