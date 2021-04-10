const createModalWindowFilmCard = (clickedSlideID) => {
  const elementModalWindowBlock = document.querySelector('.modal_window');
  elementModalWindowBlock.appendChild(clickedSlideID);
};

export { createModalWindowFilmCard };
