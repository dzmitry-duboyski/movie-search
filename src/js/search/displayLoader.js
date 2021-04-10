const elementInputLoader = document.querySelector('.form-input_loader');

const createLoader = () => {
  elementInputLoader.classList.remove('hidden');
  elementInputLoader.classList.add('displayload');
};

const deleteLoader = () => {
  const off = () => {
    elementInputLoader.classList.add('hidden');
    elementInputLoader.classList.remove('displayload');
  };
  setTimeout(off, 500);
};

export { createLoader, deleteLoader };
