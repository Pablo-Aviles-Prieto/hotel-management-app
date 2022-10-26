import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.esm.browser.min.js';

const swiperForRooms = new Swiper('.mySwiperRooms', {
  slidesPerView: 2,
  spaceBetween: 30,
  loop: true,
  breakpoints: {
    1300: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

const swiperForFacilities = new Swiper('.mySwiperFacilities', {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  breakpoints: {
    1100: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    800: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});
