import FetchDataMovie from "./functions/fetch-data-movie.js";

// Variaveis
const containerMovies = document.querySelector("#container-list");

const createCardMovie = (data) => {
  const el = document.createElement("a");
  el.classList.add("card-movie");
  el.setAttribute("href", "#");

  el.innerHTML = `
    <img class='card-img' src='https://image.tmdb.org/t/p/w300${data?.poster_path}' alt='${data?.original_title}'>
    <p class='card-description'>${data?.overview}</p>
  `;

  return el;
};

window.addEventListener("load", async () => {
  try {
    const response = await FetchDataMovie();
    response.results.forEach((data) => {
      const newElement = createCardMovie(data);

      containerMovies.appendChild(newElement);
    });
  } catch (error) {
    console.log(error);
  }
});
