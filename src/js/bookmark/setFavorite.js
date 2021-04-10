import { checkIsIncludesSlideInFavorites } from './checkIsIncludesSlideInFavorites';
import { initBookmark } from './initBookmark';

const toggleClickedSlide = (id) => {
  const favorites = localStorage.getItem('favorites');
  const isEmptyFavorites = favorites === null;
  if (isEmptyFavorites) {
    localStorage.setItem('favorites', id);
    return initBookmark();
  }

  const favoritesInArray = favorites.split(',');
  const isIncludesSlideInFavorites = checkIsIncludesSlideInFavorites(id);

  if (isIncludesSlideInFavorites) {
    const slideIndex = favoritesInArray.indexOf(id);
    favoritesInArray.splice(slideIndex, 1);
    const newFavorites = favoritesInArray.join(',');
    const isEmptyNewFavorites = newFavorites === '';

    if (isEmptyNewFavorites) {
      localStorage.removeItem('favorites');
      return initBookmark();
    }
    localStorage.setItem('favorites', newFavorites);
    return initBookmark();
  }

  if (!isIncludesSlideInFavorites) {
    favoritesInArray.push(id);
    const newFavorites = favoritesInArray.join(',');
    localStorage.setItem('favorites', newFavorites);
    return initBookmark();
  }
};

const setFavorite = (clickedSlide) => {
  const clickedSlideImdbID = clickedSlide.dataset.imdbid;
  clickedSlide.querySelector('.film-poster_bookmark').classList.toggle('in-bookmark');
  toggleClickedSlide(clickedSlideImdbID);
};

export { setFavorite };
