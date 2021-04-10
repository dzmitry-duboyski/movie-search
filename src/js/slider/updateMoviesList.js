import { mySwiper } from '../vendor/initSwiper';
import { addNewSlides } from './addNewSlides';

const updateMoviesList = () => {
  const isBookmarkPage = localStorage.getItem('isBookmarkPage') === 'true';
  if (isBookmarkPage) {
    return;
  }

  const { progress } = mySwiper;
  if (progress >= 0.7) {
    addNewSlides();
  }
};

export { updateMoviesList };
