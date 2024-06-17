// swiper-config.js
export const initializeSwiper = (containerSelector) => {
  return new Swiper(containerSelector, {
    // Optional parameters
    loop: true,
    // If we need pagination
    pagination: {
      el: ".swiper-pagination",
    },

    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    slidesPerView: 1,
    // Responsive
    breakpoints: {
      650: {
        slidesPerView: 2,
      },
      950: {
        slidesPerView: 3,
      },
      1250: {
        slidesPerView: 4,
      },
      1550: {
        slidesPerView: 5,
      },
    },
  });
};

export default initializeSwiper;
