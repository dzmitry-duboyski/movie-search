const checkIsIncludesSlideInFavorites = (id) => {
  const favorites = localStorage.getItem('favorites');
  const isFavoritesEmpty = favorites === null;

  if (isFavoritesEmpty) {
    return false;
  }

  const favoritesInArray = favorites.split(',');
  const isIncludesSlideInFavorites = favoritesInArray.includes(id);
  return isIncludesSlideInFavorites;
};

export { checkIsIncludesSlideInFavorites };
