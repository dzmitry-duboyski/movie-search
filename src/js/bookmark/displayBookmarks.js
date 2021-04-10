// import { OMD_API_KEY } from '../../../environment';
import { createMovieCard } from '../slider/createMovieCard';
import { mySwiper } from '../vendor/initSwiper';
import { initLocalStorage } from '../utils/initLocalStorage';

const displayBookmarks = () => {
  const favorites = localStorage.getItem('favorites');
  const favoritesInArray = favorites.split(',');
  localStorage.setItem('isBookmarkPage', true);
  const elementMenuMain = document.querySelector('.menu-item_main');
  const elementMenuClear = document.querySelector('.menu-item_clear');
  elementMenuMain.classList.remove('hidden');
  elementMenuClear.classList.remove('hidden');

  initLocalStorage();
  localStorage.setItem('isBookmarkPage', true);
  try {
    mySwiper.removeAllSlides();
    favoritesInArray.forEach((filmId) => {
      const urlForIMDb = `https://www.omdbapi.com/?i=${filmId}&apikey=${OMD_API_KEY}`;
      fetch(urlForIMDb)
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
        })
        .then((res) => {
          const fullFilmCard = {
            imdbID: res.imdbID,
            Title: res.Title,
            Poster: res.Poster,
            Year: res.Year,
            imdbRating: res.imdbRating,
            Genre: res.Genre,
            Runtime: res.Runtime,
            Plot: res.Plot,
            Actors: res.Actors,
            Country: res.Country,
          };
          return fullFilmCard;
        })
        .then((fullFilmCard) => {
          const newCard = createMovieCard(fullFilmCard);
          mySwiper.appendSlide(newCard);
          return newCard;
        })
        .catch((e) => console.error(e));
    });
  } catch (e) {
    console.log(e);
  }


}

export {displayBookmarks};