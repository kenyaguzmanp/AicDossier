import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Text, View } from "react-native";
import { ScreenNames } from "../ScreenNames";

const FavoritesArtworks = () => {
  const navigation = useNavigation();
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text onPress={() => navigation.navigate(ScreenNames.ArtworkDetail)}>FavoritesArtworks Screen PAGE</Text>
      </View>
    );
}

export default FavoritesArtworks;
  