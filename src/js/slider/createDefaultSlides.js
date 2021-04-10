import { createSlides } from './createSlides';
import { START_PAGE_QUERY } from '../constants/constants';

function createDefaultSlides (requestText = START_PAGE_QUERY) {

  createSlides(requestText);
  localStorage.setItem('currentQuery', START_PAGE_QUERY);
}

export { createDefaultSlides };
