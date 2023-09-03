import { createSlice } from '@reduxjs/toolkit'
import { Artwork } from '../../interfaces';

export type ArtworksSlice = {
  artworks: Artwork[];
  favorites:  Artwork[];
  selectedArtwork: Artwork[] | null;
}

const initialState: ArtworksSlice = {
    artworks: [],
    favorites: [],
    selectedArtwork: null,
};

const artworksSlice = createSlice({
  name: 'artworks',
  initialState,
  reducers: {
    setArtworks(state, action) {

    const { data } = action.payload;

      state.artworks = [...data];
    },
    selectedArtwork(state, action) {
      const matchingArtwork = state.artworks.find(artwork => artwork.id === action.payload)

      if (matchingArtwork) {
        state.selectedArtwork = [...matchingArtwork];
      }
    },
    addArtworkToFavorites(state, action) {
      state.favorites.push(action.payload);
    },
    removeArtworkToFavorites(state, action) {
      const currentFavorites = [...state.favorites];
      const filteredFavorites = currentFavorites.filter(favorite => favorite.id !== action.payload.id);
      state.favorites = [...filteredFavorites];
    },

  }
})


export const { setArtworks, selectedArtwork, addArtworkToFavorites, removeArtworkToFavorites } = artworksSlice.actions

export default artworksSlice.reducer