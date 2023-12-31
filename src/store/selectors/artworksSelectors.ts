import { createSelector } from "reselect";

export const getArtworks = (state) => state?.artworks?.artworks;

export const getSelectedArtwork = (state) => state?.artworks?.selectedArtwork;

export const getFavoritesArtworks = (state) => state?.artworks?.favorites;

export const getIsFavoriteArtwork = (artworkId) =>
  createSelector(getFavoritesArtworks, (favorites) => {
    if (favorites) {
      const isFavorite = favorites.some(favorite => favorite.id === artworkId);

      return isFavorite;
    }
    return false;
  });

export const getIsLoadingArtworkDetail = (state) => state?.artworks?.isLoadingArtworkDetail;

export const getHasErrorArtworkDetail = (state) => state?.artworks?.hasErrorArtworkDetail;