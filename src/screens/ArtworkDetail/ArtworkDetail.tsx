import React from "react";
import { Text, View } from "react-native";
import ArtworkThumbnail from "../../components/ArtworkThumbnail/ArtworkThumbnail";
import { useSelector } from "react-redux";
import { getSelectedArtwork } from "../../store/selectors/artworksSelectors";

const ArtworkDetail = () => {
  const selectedArtwork = useSelector(getSelectedArtwork);
  return (
    <View style={{ flex: 1, padding: 20, backgroundColor: "pink" }}>
      <Text>ArtworkDetail Screen PAGE</Text>
      <ArtworkThumbnail artwork={selectedArtwork}/>
    </View>
  );
}

export default ArtworkDetail;
