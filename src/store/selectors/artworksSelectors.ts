import { createSelector } from "reselect";

export const getArtworks = (state) => state?.artworks?.artworks;

export const getFavoritesArtworks = (state) => state?.artworks?.favorites;

export const getIsFavoriteArtwork = (artworkId) =>
  createSelector(getFavoritesArtworks, (favorites) => {
    if (favorites) {
      const isFavorite = favorites.some(favorite => favorite.id === artworkId);

      return isFavorite;
    }
    return false;
  });