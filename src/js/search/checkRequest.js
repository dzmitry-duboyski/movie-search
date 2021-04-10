import { deleteLoader } from './displayLoader';
import { showForMessageBlock } from './toggleDisplayMessageBlock';
import { createSlides } from '../slider/createSlides';
import { TEXT_MESSAGE_ERROR, TEXT_MESSAGE_INFO } from '../constants/constants';
import { mySwiper } from '../vendor/initSwiper';
import { initLocalStorage } from '../utils/initLocalStorage';
import { OMD_API_KEY } from '../../../environment';


const checkRequest = async (newRequestText) => {
  const modifyNewRequestText = `"${newRequestText}".`;
  try {
    const url = `https://www.omdbapi.com/?s=${newRequestText}&page=1&apikey=${OMD_API_KEY}`;
    const response = await fetch(url);

    if (!response.ok) {
      return console.error('Sorry, remote service is not available');
    }

    const data = await response.json();
    const isResponseBrocken = data.Response === 'False';
    if (isResponseBrocken) {

      console.error(`Error: ${data.Error}`);
      return showForMessageBlock(TEXT_MESSAGE_ERROR.VIDEO_NOT_FOUND, modifyNewRequestText);
    }

    const isError = !(data.Response === 'True');
    if (isError) {
      const getErrorNotFound = new Error(TEXT_MESSAGE_ERROR.VIDEO_NOT_FOUND);
      throw getErrorNotFound;
    }

    showForMessageBlock(TEXT_MESSAGE_INFO.VIDEOS_FOUND, modifyNewRequestText);
    initLocalStorage();
    mySwiper.removeAllSlides();
    localStorage.setItem('currentQuery', newRequestText);
    createSlides(newRequestText);

  } catch (e) {
    console.error(e);
  }

  deleteLoader();
  return console.log(newRequestText);
};

export { checkRequest };
