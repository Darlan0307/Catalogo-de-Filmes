const apikey =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNWIwMTA5YWIxMTJiMGYzMDc0YmZhNzNiNmIyY2JhNCIsInN1YiI6IjY1NzRkNjJmZTkzZTk1MDBhZDAzNjJlZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3jV6CcAvxv6OULA_fOj4HS4CseHOBW3ardjjavwVysc";

export default async function FetchDataMovie() {
  const url =
    "https://api.themoviedb.org/3/movie/popular?language=pt-BR&include_adult=true&page=1";

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${apikey}`,
    },
  };

  try {
    const response = await fetch(url, options);
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
}
