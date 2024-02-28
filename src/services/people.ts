const options = {
  method: "GET",
  headers: {
    accept: "application/json",

    Authorization: import.meta.env.VITE_TMDB_AUTHORIZATION_KEY,
  },
};

export async function getPeople(curPage: number) {
  const res = await fetch(
    `https://api.themoviedb.org/3/person/popular?language=en-US&page=${curPage}`,
    options
  );
  if (!res.ok)
    throw new Error(`An error occured during fetching popular people list`);

  const data = await res.json();

  return data;
}

export async function getPeopleDetail(id: string | undefined) {
  const res = await fetch(
    `https://api.themoviedb.org/3/person/${id}?language=en-US&append_to_response=movie_credits,tv_credits`,
    options
  );

  if (!res.ok)
    throw new Error(`An error occured during fetching people detail`);

  const data = await res.json();

  return data;
}
