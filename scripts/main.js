import { FetchDataMovieByCategory } from "./functions/fetch-data-movie.js";
import initializeSwiper from "./services/swiper-config.js";

// Variaveis
const carrosselMoviePopular = document.querySelector(
  "#movie-popular .swiper-wrapper"
);
const carrosselTopRated = document.querySelector("#top_rated .swiper-wrapper");
const carrosselNowPlaying = document.querySelector(
  "#now_playing .swiper-wrapper"
);

const createCardMovie = (data) => {
  const slide = document.createElement("a");
  slide.classList.add("swiper-slide");
  slide.setAttribute("href", "#");
  // slide.setAttribute("href", `${data?.id}`);

  slide.innerHTML = `
    <article class="card">
      <img class='img-movie-slide' src='https://image.tmdb.org/t/p/w300${data?.poster_path}' alt='${data?.original_title}'>
      <p class='card-title'>${data?.original_title}</p>
    </article>
  `;

  return slide;
};

window.addEventListener("load", async () => {
  try {
    const responseMoviesPopular = await FetchDataMovieByCategory("popular");
    responseMoviesPopular.results.forEach((data) => {
      const newSlide = createCardMovie(data);

      carrosselMoviePopular.appendChild(newSlide);
    });

    const responseTopRated = await FetchDataMovieByCategory("top_rated");
    responseTopRated.results.forEach((data) => {
      const newSlide = createCardMovie(data);

      carrosselTopRated.appendChild(newSlide);
    });

    const responseMoviesNowPlaying = await FetchDataMovieByCategory(
      "now_playing"
    );
    responseMoviesNowPlaying.results.forEach((data) => {
      const newSlide = createCardMovie(data);

      carrosselNowPlaying.appendChild(newSlide);
    });

    initializeSwiper("#movie-popular");
    initializeSwiper("#top_rated");
    initializeSwiper("#now_playing");
  } catch (error) {
    console.log(error);
  }
});
