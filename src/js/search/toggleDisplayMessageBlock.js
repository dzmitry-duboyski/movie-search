import { TEXT_MESSAGE_ERROR } from '../constants/constants';
import { deleteLoader, createLoader } from './displayLoader';

const forMessageBlock = document.querySelector('.form-label');

const showForMessageBlock = (message, description = '') => {
  createLoader();
  const isMessageError = Object.values(TEXT_MESSAGE_ERROR).includes(message);
  const isMessageInfo = !isMessageError;

  if (isMessageError) {
    forMessageBlock.classList.remove('message');
    forMessageBlock.classList.add('error');
  }
  if (isMessageInfo) {
    forMessageBlock.classList.remove('error');
    forMessageBlock.classList.add('message');
  }

  forMessageBlock.classList.remove('hidden');
  document.querySelector('.form-label').innerText = `${message} ${description}`;
  document.querySelector('.form-input').focus();
  deleteLoader();
};

const hideForMessageBlock = () => forMessageBlock.classList.add('hidden');

export { showForMessageBlock, hideForMessageBlock };
