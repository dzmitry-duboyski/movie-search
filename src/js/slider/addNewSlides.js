import { createSlides } from './createSlides';

const addNewSlides = () => {
  const requestText = localStorage.getItem('currentQuery');
  createSlides(requestText);
};

export { addNewSlides };
