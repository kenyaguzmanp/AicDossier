import React from "react";
import { Text, View } from "react-native";
import { useSelector } from "react-redux";
import ArtworksList from "../../components/ArtworksList/ArtworksList";

const Artworks = () => {
  const artworks = useSelector((state) => state?.artworks?.artworks);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Artworks Screen PAGE</Text>
      <ArtworksList data={artworks} />
    </View>
  );
}

export default Artworks;
  