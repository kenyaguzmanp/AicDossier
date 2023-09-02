import { createSlice } from '@reduxjs/toolkit'
import { Artwork } from '../../interfaces';

type ArtworksSlice = {
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
    }
  }
})


export const { setArtworks, selectedArtwork } = artworksSlice.actions

export default artworksSlice.reducer