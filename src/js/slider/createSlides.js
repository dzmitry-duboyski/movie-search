
import { createLoader, deleteLoader } from '../search/displayLoader';
import { OMD_API_KEY } from '../../../environment';
import { createMovieCard } from './createMovieCard';
import { mySwiper } from '../vendor/initSwiper';
import {
  TEXT_MESSAGE_ERROR,
  HOW_MANY_VIDEO_ON_PAGE,
  HOW_MANY_PAGES_TO_LOAD,
} from '../constants/constants';

async function createSlides (requestText, pages = HOW_MANY_PAGES_TO_LOAD) {
  createLoader();
  let pagesToLoad = pages;
  const numberPageToLoad = localStorage.getItem('numberPageToLoad');
  const isFirstStart = numberPageToLoad === null;

  if (isFirstStart) {
    const page = 1;
    localStorage.setItem('numberPageToLoad', page);
  } else {
    const isEndMovieList = Number(localStorage.getItem('numberPageToLoad')) > Number(localStorage.getItem('AllPages'));
    if (isEndMovieList) {
      return deleteLoader();
    }
  }

  let pageToLoad = Number(localStorage.getItem('numberPageToLoad'));

  try {
    if (!OMD_API_KEY) {
      return console.error(`API key not found :( \n OMD_API_KEY=${OMD_API_KEY}`);
    }
    const url = `https://www.omdbapi.com/?s=${requestText}&page=${pageToLoad}&apikey=${OMD_API_KEY}`;
    const response = await fetch(url);

    if (!response.ok) {
      deleteLoader();
      return console.error('Sorry, remote service is not available');
    }

    const data = await response.json();
    const isResponseBrocken = data.Response === 'False';
    if (isResponseBrocken) {
      return console.error(`Error: ${data.Error} \n check  variable'requestText'`);
    }

    localStorage.setItem('totalResults', data.totalResults);
    const AllPages = Math.floor(data.totalResults / HOW_MANY_VIDEO_ON_PAGE);
    localStorage.setItem('AllPages', AllPages);


    const isError = data.Response === 'True';
    if (!isError) {
      const getErrorNotFound = new Error(TEXT_MESSAGE_ERROR.VIDEO_NOT_FOUND);
      throw getErrorNotFound;
    }

    const getFilmsListID = data.Search.map((el) => el.imdbID);

    getFilmsListID.forEach((filmId) => {
      const urlForIMDb = `https://www.omdbapi.com/?i=${filmId}&apikey=${OMD_API_KEY}`;
      fetch(urlForIMDb)
        .then(response => {
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
            Writer: res.Writer,
            Released: res.Released,
            Director: res.Director,
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

  deleteLoader();
  pageToLoad += 1;
  pagesToLoad -= 1;
  localStorage.setItem('numberPageToLoad', pageToLoad);

  const allPages = localStorage.getItem('AllPages');

  const isStopLoadPages = pageToLoad > allPages;
  if (isStopLoadPages) {
    return console.log('End movie list.');
  }
  const isLoadNextPage = pagesToLoad > 0;
  if (isLoadNextPage) {
    return createSlides(requestText, pagesToLoad);
  }
}

export { createSlides }