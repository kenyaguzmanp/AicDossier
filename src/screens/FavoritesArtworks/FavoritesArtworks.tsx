import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Text, View } from "react-native";
import { ScreenNames } from "../ScreenNames";
import { useSelector } from "react-redux";
import { getFavoritesArtworks } from "../../store/selectors/artworksSelectors";
import ArtworksList from "../../components/ArtworksList/ArtworksList";

const FavoritesArtworks = () => {
  const navigation = useNavigation();
  const favoritesArtworks = useSelector(getFavoritesArtworks);

    return (
      <View style={{ flex: 1, padding: 20 }}>
        <Text onPress={() => navigation.navigate(ScreenNames.ArtworkDetail)}>FavoritesArtworks Screen PAGE</Text>
        <ArtworksList data={favoritesArtworks} shouldHandleOnEnd={false} />
      </View>
    );
}

export default FavoritesArtworks;
  