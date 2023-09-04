import React from "react";
import { View } from "react-native";
import { useSelector } from "react-redux";
import ArtworksList from "../../components/ArtworksList/ArtworksList";
import { getArtworks } from "../../store/selectors/artworksSelectors";

const Artworks = () => {
  const artworks = useSelector(getArtworks);
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <ArtworksList data={artworks} />
    </View>
  );
}

export default Artworks;
