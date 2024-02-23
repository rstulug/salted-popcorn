const options = {
  method: "GET",
  headers: {
    accept: "application/json",

    Authorization: import.meta.env.VITE_TMDB_AUTHORIZATION_KEY,
  },
};

export async function getPeople() {
  const res = await fetch(
    "https://api.themoviedb.org/3/person/popular?language=en-US&page=1",
    options
  );
  if (!res.ok)
    throw new Error(`An error occured during fetching popular people list`);

  const data = await res.json();

  return data;
}
