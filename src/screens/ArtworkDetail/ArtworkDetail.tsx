import React, { useEffect } from "react";
import { Image, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { getSelectedArtwork } from "../../store/selectors/artworksSelectors";
import { selectedArtwork } from "../../store/slices/artworksSlice";
import { getFullImageUrl } from "../../utils/artworkDetails";

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
              style={{ flex: 1}}
              source={{
                uri: currentArtwork.thumbnail.lqip,
              }}
            />
            <Image
              style={{ flex: 1 }}
              source={{
                uri: getFullImageUrl(currentArtwork.image_id)
              }}
            />
          </>
        )}
      </View>
    </View>
  );
}

export default ArtworkDetail;
