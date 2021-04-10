const initLocalStorage = () => {
  localStorage.removeItem('numberPageToLoad');
  localStorage.removeItem('currentQuery');
  localStorage.removeItem('totalResults');
  localStorage.removeItem('AllPages');
  localStorage.removeItem('isBookmarkPage');
};
export { initLocalStorage };
