import './assets/styles/style.scss';
import 'normalize.css';
import { clickHandler } from './js/utils/clickHandler';
import { START_PAGE_QUERY } from './js/constants/constants';
import { createDefaultSlides } from './js/slider/createDefaultSlides';
import { mySwiper } from './js/vendor/initSwiper';
import { updateMoviesList } from './js/slider/updateMoviesList';
import { initLocalStorage } from './js/utils/initLocalStorage';
import { initBookmark } from './js/bookmark/initBookmark';

mySwiper.init();
initLocalStorage();
initBookmark();
createDefaultSlides(START_PAGE_QUERY);

document.querySelector('.form').addEventListener('submit', clickHandler);
document.querySelector('.form').addEventListener('reset', clickHandler);
document.querySelector('.slider').addEventListener('click', clickHandler);
document.querySelector('.bookmark-menu').addEventListener('click', clickHandler);
document.querySelector('.main-modal_window_block').addEventListener('click', clickHandler);
document.addEventListener('keyup', clickHandler);
mySwiper.on('slideNextTransitionEnd', updateMoviesList);
