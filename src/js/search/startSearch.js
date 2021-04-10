import { createLoader, deleteLoader } from './displayLoader';
import { getRequestText } from './getRequestText';
import { showForMessageBlock, hideForMessageBlock } from './toggleDisplayMessageBlock';
import { TEXT_MESSAGE_ERROR, MIN_LENGTH_REQUEST_TEXT } from '../constants/constants';
import { checkRequest } from './checkRequest';

const startSearch = () => {
  hideForMessageBlock();
  createLoader();
  const newRequestText = getRequestText();
  const oldRequestText = localStorage.getItem('currentQuery');
  const isSameRequest = newRequestText === oldRequestText;
  const isEmptyRequestText = newRequestText === '';
  const isShortRequest = (newRequestText.length <= MIN_LENGTH_REQUEST_TEXT);

  if (isSameRequest) {
    return deleteLoader();
  }

  if (isEmptyRequestText) {
    deleteLoader();
    return showForMessageBlock(TEXT_MESSAGE_ERROR.EMPTY_REQUEST);
  }
  if (isShortRequest) {
    deleteLoader();
    return showForMessageBlock(TEXT_MESSAGE_ERROR.SHORT_REQUEST);
  }

  return checkRequest(newRequestText);
};

export { startSearch };
