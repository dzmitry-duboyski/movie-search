import { PATH_DEFAULT_POSTER } from '../constants/constants';
import { checkIsIncludesSlideInFavorites } from '../bookmark/checkIsIncludesSlideInFavorites';

/**
* The incoming 'element' object contains the following fields
* { imdbID, Title, Poster, Year, imdbRating, Genre, Runtime, Plot,
*   Actors, Country, Writer, Released, Director, }
*
*/
const createMovieCard = (element) => {
  const {
    Title,
    imdbID,
    Year,
    Country,
    Genre,
    Plot,
    Actors,
    Writer,
    Released,
    Director,
  } = element;
  let { imdbRating, Poster, Runtime } = element;
  const isNoRating = imdbRating === 'N/A';
  const isNoRunTime = Runtime === 'N/A';
  const isNoPoster = Poster === 'N/A' || Poster === 'undefined';
  const isIncludesSlideInFavorites = checkIsIncludesSlideInFavorites(imdbID);
  let styleBookmark = '';
  let ratingBias = 200 - Number(imdbRating) * 20;
  let noRatingClass = '';


  if (isNoRating) {
    imdbRating = 'no rating';
    noRatingClass = 'no-rating';
    ratingBias = 0;
  }
  if (isNoRunTime) {
    Runtime = '';
  }

  if (isNoPoster) {
    Poster = PATH_DEFAULT_POSTER;
  }

  if (isIncludesSlideInFavorites) {
    styleBookmark = 'in-bookmark';
  }

  const newCardFilm = `<div class="swiper-slide" data-imdbid="${imdbID}" style="width: 241px; margin-right: 20px;">
                            <div class="slide-element">
                              <div class="film-poster">
                                <img class="film-poster_image" src="${Poster}" alt="poster image">
                                <div class="film-poster_bookmark ${styleBookmark}"></div>
                              </div>

                              <div class="fillm-info-short">
                                <a class="film-link" href="https://www.imdb.com/title/${imdbID}/videogallery/?ref_=tt_pv_vi_sm" alt="Video Gallery for '${Title}'" title="Video Gallery  for '${Title}'">
                                  <div class="film-title" data-url="https://www.imdb.com/title/${imdbID}/videogallery/?ref_=tt_pv_vi_sm">${Title}</div>
                                </a>
                                <div class="film-info">${Year}, ${Country},${Runtime}</div>
                                <div class="film-genre">${Genre}</div>
                                <div class="film-rating">
                                  <div class="film-rating-background ${noRatingClass}" style="left:-${ratingBias}px;"></div>
                                  <div class="film-rating-star"></div>
                                  <div class="film-rating-text">
                                  <img src="https://ia.media-imdb.com/images/G/01/imdb/plugins/rating/images/imdb_37x18.png" alt="rating image"/>
                                  ${imdbRating}</div>
                                </div>
                              </div>
                              <div class="fillm-info-full">
                                  <a class="film-link" href="https://www.imdb.com/title/${imdbID}/videogallery/?ref_=tt_pv_vi_sm" alt="Video Gallery for '${Title}'" title="Video Gallery  for '${Title}'">
                                   ${Title}
                                  </a>
                                  <p>Director: ${Director}</p>
                                  <p>Actors: ${Actors}</p>
                                  <p>Genre: ${Genre}</p>
                                  <p>Year: ${Year}</p>
                                  <p>Released: ${Released}</p>
                                  <p>Runtime: ${Runtime}</p>
                                  <p>Country: ${Country}</p>
                                  <p>Writer: ${Writer}</p>
                                  <p>Rating: ${imdbRating}</p>
                                  <p>Plot: ${Plot}</p>
                              </div>
                            </div>
                          </div>`;
  return newCardFilm;
};

export { createMovieCard };
