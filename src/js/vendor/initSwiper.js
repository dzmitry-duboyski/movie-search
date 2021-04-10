/* eslint-disable no-var */
/* eslint-disable import/prefer-default-export */
/* eslint-disable import/no-mutable-exports */
import Swiper from '../../../node_modules/swiper/js/swiper.esm.browser.bundle';

export var mySwiper = new Swiper('.swiper-container', {
  direction: 'horizontal',
  // observer: true,
  normalizeSlideIndex: true,
  loop: false,
  // watchOverflow: false,
  // grabCursor: true,

  lazy: {
    loadPrevNext: true,
    loadPrevNextAmount: 10,
  },

  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
  mousewheel: {
    invert: true,
    sensitivity: 1500,
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'progressbar',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  scrollbar: {
    el: '.swiper-scrollbar',
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    552: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    800: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1032: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
  },
});
