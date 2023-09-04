import React, { useEffect, useState } from "react";
import { Image, ScrollView, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { getHasErrorArtworkDetail, getIsLoadingArtworkDetail, getSelectedArtwork } from "../../store/selectors/artworksSelectors";
import { getFullImageUrl } from "../../utils/artworkDetails";
import ImageModal from "react-native-image-modal";
import Chips from "../../components/Chips/Chips";
import { selectedArtwork } from "../../store/slices/artworksSlice";
import ArtworkDescription from "../../components/ArtworkDescription/ArtworkDescription";
import { WIDTH } from "../../theme";
import RetryDetail from "../../components/RetryDetail/RetryDetail";
import { enhancedFetchArtworkDetail } from "../../api/services";
import Spinner from "../../Spinner/Spinner";

const ArtworkDetail = (props) => {
  const currentArtwork = useSelector(getSelectedArtwork);
  const isLoadingArtworkDetail = useSelector(getIsLoadingArtworkDetail);
  const hasErrorArtworkDetail = useSelector(getHasErrorArtworkDetail);
  const [isFullImageLoaded, setIsFullImageLoaded] = useState(false);
  
  const dispatch = useDispatch();

  const onRetry = () => {
    if (props?.route?.params?.artworkId) {
      enhancedFetchArtworkDetail({
        serviceParams: {
          artworkId: props.route.params.artworkId,
        },
      });
    }
  }

  useEffect(() => {
    return () => {
      dispatch(selectedArtwork(null));
    }
  }, [])

  if (isLoadingArtworkDetail) {
    return (
      <View style={{ justifyContent: "center", alignSelf: "center", paddingVertical: 50 }}>
        <Spinner size="large" />
      </View>
    );
  }

  if (!isLoadingArtworkDetail &&  hasErrorArtworkDetail) {
    return (
      <>
        <RetryDetail onRetry={onRetry}/>
      </>
    )
  }

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
