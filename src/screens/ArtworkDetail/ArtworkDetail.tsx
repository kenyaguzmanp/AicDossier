import React, { useEffect, useState } from "react";
import { Dimensions, Image, ScrollView, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { getSelectedArtwork } from "../../store/selectors/artworksSelectors";
import { getFullImageUrl } from "../../utils/artworkDetails";
import ImageModal from "react-native-image-modal";
import Chips from "../../components/Chips/Chips";
import { selectedArtwork } from "../../store/slices/artworksSlice";
import ArtworkDescription from "../../components/ArtworkDescription/ArtworkDescription";

const WIDTH = Dimensions.get("window").width;

const ArtworkDetail = () => {
  const currentArtwork = useSelector(getSelectedArtwork);
  const [isFullImageLoaded, setIsFullImageLoaded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      dispatch(selectedArtwork(null));
    }
  }, [])

  return (
    <ScrollView style={{ flex: 1, backgroundColor: "white" }}>
      <View style={{ flex: 1 }}>
        {currentArtwork?.thumbnail && (
          <View style={{ position: isFullImageLoaded ? "absolute" : "relative", width: '100%', left: 0 }}>
            <Image
              style={{
                width: WIDTH,
                height: WIDTH,
              }}
              source={{
                uri: currentArtwork.thumbnail.lqip,
              }}
            />
          </View>
        )}
        <ImageModal
          resizeMode="contain"
          imageBackgroundColor="#000000"
          style={{
            width: isFullImageLoaded ? WIDTH : 0,
            height: WIDTH,
          }}
          source={{
            uri: getFullImageUrl(currentArtwork.image_id),
          }}
          onLoadStart={() => setIsFullImageLoaded(false)}
          onLoadEnd={() => {
            setIsFullImageLoaded(true)
            // setTimeout(() => {
            //   setIsFullImageLoaded(true)
            // }, 5000);
          }}
        />
      </View>
      <ArtworkDescription artwork={currentArtwork} />
      {currentArtwork.category_titles && <Chips items={currentArtwork.category_titles} />}
    </ScrollView>
  );
}

export default ArtworkDetail;
