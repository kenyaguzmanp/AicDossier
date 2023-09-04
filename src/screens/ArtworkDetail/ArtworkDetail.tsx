import React, { useEffect } from "react";
import { Image, Text, View } from "react-native";
import ArtworkThumbnail from "../../components/ArtworkThumbnail/ArtworkThumbnail";
import { useDispatch, useSelector } from "react-redux";
import { getSelectedArtwork } from "../../store/selectors/artworksSelectors";
import { selectedArtwork } from "../../store/slices/artworksSlice";

const ArtworkDetail = () => {
  const currentArtwork = useSelector(getSelectedArtwork);
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      dispatch(selectedArtwork(null));
    }
  }, [])

  return (
    <View style={{ flex: 1, padding: 20, backgroundColor: "pink" }}>
      <Text>ArtworkDetail Screen PAGE</Text>
      <View style={{ flex: 1 }}>
        <Text>{currentArtwork.title}</Text>
        <Text>{currentArtwork.artist_title}</Text>
        {currentArtwork?.thumbnail && (
          <>
            <Image
              style={{ width: 66, height: 58 }}
              source={{
                uri: currentArtwork.thumbnail.lqip,
              }}
            />
            <Image
              style={{ width: 66, height: 58 }}
              source={{
                uri: `https://www.artic.edu/iiif/2/${currentArtwork.image_id}/full/200,/0/default.jpg` // TODO: REVISAR URL
              }}
            />
          </>
        )}
      </View>
    </View>
  );
}

export default ArtworkDetail;
