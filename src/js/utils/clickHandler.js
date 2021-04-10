import { startSearch } from '../search/startSearch';
import { hideForMessageBlock } from '../search/toggleDisplayMessageBlock';
import { mySwiper } from '../vendor/initSwiper';
import { setFavorite } from '../bookmark/setFavorite';
import { displayBookmarks } from '../bookmark/displayBookmarks';
import { createDefaultSlides } from '../slider/createDefaultSlides';
import { START_PAGE_QUERY } from '../constants/constants';
import { initBookmark } from '../bookmark/initBookmark';
import { createModalWindowFilmCard } from '../slider/createModalWindowFilmCard';
import { deleteModalWindowFilmCard } from '../slider/deleteModalWindowFilmCard';

const clickHandler = (event) => {
  event.preventDefault();

  const isClickOnEnter = event.type === 'submit';
  const isClickOnClearInput = event.type === 'reset';
  const isClickOnBookmark = event.target.className === 'menu-item_bookmark';
  const isClickOnBookmarkClear = event.target.className === 'menu-item_clear';
  const isClickOnBookmarkMain = event.target.className === 'menu-item_main';
  const isClickOnPosterBookmark = [...event.target.classList].includes('film-poster_bookmark');
  const isClickOnEscape = event.code === 'Escape';
  const isCliskOnTitleLink = event.target.className === 'film-title';
  const isClickOnPosterImage = event.target.className === 'film-poster_image';
  const elementSearchInput = document.querySelector('.form-input');
  const elementMenuMain = document.querySelector('.menu-item_main');
  const elementMenuClear = document.querySelector('.menu-item_clear');
  const elementModalWindowBlock = document.querySelector('.main-modal_window_block');
  const isClickOnElementModalWindowBlock = event.target.className === 'main-modal_window_block';

  if (isClickOnEnter) {
    return startSearch();
  }

  if (isClickOnClearInput) {
    elementSearchInput.value = '';
    elementSearchInput.focus();
    return hideForMessageBlock();
  }

  if (isClickOnPosterBookmark) {
    const { clickedSlide } = mySwiper;
    setFavorite(clickedSlide);
  }

  if (isClickOnBookmark) {
    displayBookmarks();
  }

  if (isClickOnBookmarkClear) {
    localStorage.removeItem('isBookmarkPage');
    localStorage.removeItem('favorites');
    elementMenuMain.classList.add('hidden');
    elementMenuClear.classList.add('hidden');
    mySwiper.removeAllSlides();
    initBookmark();
    return createDefaultSlides(START_PAGE_QUERY);
  }

  if (isClickOnBookmarkMain) {
    localStorage.removeItem('isBookmarkPage');
    elementMenuMain.classList.add('hidden');
    elementMenuClear.classList.add('hidden');
    mySwiper.removeAllSlides();
    return createDefaultSlides(START_PAGE_QUERY);
  }

  if (isClickOnPosterImage) {
    const { clickedSlide } = mySwiper;
    const clickedSlideID = clickedSlide;
    elementModalWindowBlock.classList.remove('hidden');
    return createModalWindowFilmCard(clickedSlideID);
  }

  if (isClickOnElementModalWindowBlock || isClickOnEscape) {
    return deleteModalWindowFilmCard();
  }

  if (isCliskOnTitleLink) {
    const { url } = event.target.dataset;
    location.href = url;
  }
};

export { clickHandler };
