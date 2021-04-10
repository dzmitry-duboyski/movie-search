const initBookmark = () => {
  const favorites = localStorage.getItem('favorites');
  const isFavoritesEmpty = favorites === null;
  const elementHeaderBookmark = document.querySelector('.bookmark-menu');
  const isBookmarkPage = localStorage.getItem('isBookmarkPage');
  if (isBookmarkPage) {
    return;
  }

  if (isFavoritesEmpty) {
    elementHeaderBookmark.classList.add('hidden');
    return;
  }
  if (!isFavoritesEmpty) {
    elementHeaderBookmark.classList.remove('hidden');
    return;
  }
};

export { initBookmark };
