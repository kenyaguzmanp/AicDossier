import React from "react";
import { View } from "react-native";
import { useSelector } from "react-redux";
import { getFavoritesArtworks } from "../../store/selectors/artworksSelectors";
import ArtworksList from "../../components/ArtworksList/ArtworksList";

const FavoritesArtworks = () => {
  const favoritesArtworks = useSelector(getFavoritesArtworks);

    return (
      <View style={{ flex: 1, backgroundColor: "white" }}>
        <ArtworksList data={favoritesArtworks} shouldHandleOnEnd={false} />
      </View>
    );
}

export default FavoritesArtworks;
  