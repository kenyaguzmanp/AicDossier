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

      state.artworks = [...state.artworks, ...data];
    },
    cleanArtworks(state) {
      state.artworks = [];
    },
    selectedArtwork(state, action) {
      state.selectedArtwork = {...action.payload};
    },
    addArtworkToFavorites(state, action) {
      state.favorites.push(action.payload);
    },
    removeArtworkToFavorites(state, action) {
      const currentFavorites = [...state.favorites];
      const filteredFavorites = currentFavorites.filter(favorite => favorite.id !== action.payload.id);
      state.favorites = [...filteredFavorites];
    },
    setInitialState(state) {
      state = { ...initialState };
    }
  }
})


export const { setArtworks, selectedArtwork, addArtworkToFavorites, removeArtworkToFavorites, cleanArtworks, setInitialState } = artworksSlice.actions

export default artworksSlice.reducer