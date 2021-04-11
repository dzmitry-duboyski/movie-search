import { mySwiper } from '../vendor/initSwiper';

const deleteModalWindowFilmCard = () => {
  const elementModalWindowBlock = document.querySelector('.main-modal_window_block');
  elementModalWindowBlock.classList.add('hidden');

  const currentIndex = mySwiper.clickedIndex;
  const currentSlide = document.querySelector('.modal_window').querySelector('.swiper-slide');
  const isCurrentSlideIsNull = currentSlide === null;

  if (isCurrentSlideIsNull) {
    return;
  }

  mySwiper.addSlide(currentIndex, currentSlide);
};

export { deleteModalWindowFilmCard };
