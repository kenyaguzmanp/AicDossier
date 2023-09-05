import React, { useEffect, useState } from "react";
import { Image, ScrollView, View } from "react-native";
import { useSelector } from "react-redux";
import { getHasErrorArtworkDetail, getIsFavoriteArtwork, getSelectedArtwork } from "../../store/selectors/artworksSelectors";
import { getFullImageUrl } from "../../utils/artworkDetails";
import ImageModal from "react-native-image-modal";
import Chips from "../../components/Chips/Chips";
import ArtworkDescription from "../../components/ArtworkDescription/ArtworkDescription";
import { WIDTH } from "../../theme";
import RetryDetail from "../../components/RetryDetail/RetryDetail";
import { enhancedFetchArtworkDetail } from "../../api/services";
import Spinner from "../../Spinner/Spinner";
import StarIcon from "../../components/StarIcon/StarIcon";

const ArtworkDetail = (props) => {
  const currentArtwork = useSelector(getSelectedArtwork);
  const hasErrorArtworkDetail = useSelector(getHasErrorArtworkDetail);
  const isFavorite = useSelector(getIsFavoriteArtwork(props?.route?.params?.artworkId));
  const [isFullImageLoaded, setIsFullImageLoaded] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  

  const onRetry = () => {
    if (props?.route?.params?.artworkId) {
      enhancedFetchArtworkDetail({
        serviceParams: {
          artworkId: props.route.params.artworkId,
        },
        setLoadingState: setIsLoading,
      });
    }
  }

  useEffect(() => {
    enhancedFetchArtworkDetail({
      serviceParams: {
        artworkId: props.route.params.artworkId,
        fakeService: false,
      },
      setLoadingState: setIsLoading,
    });
  }, [])

  if (isLoading) {
    return (
      <View style={{ justifyContent: "center", alignSelf: "center", paddingVertical: 50 }}>
        <Spinner size="large" />
      </View>
    );
  }

  if (!isLoading &&  hasErrorArtworkDetail) {
    return (
      <>
        <RetryDetail onRetry={onRetry}/>
      </>
    )
  }

  return (
    <ScrollView style={{ flex: 1, backgroundColor: "white" }}>
      <View style={{ flex: 1 }}>
        <View>
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
            onLoadEnd={() => setIsFullImageLoaded(true)}
          />
          {isFavorite && (<View style={{ position: "absolute", right: 10, top: 10 }}>
            <StarIcon width={50} height={50} />
          </View>)}
        </View>
      </View>
      <ArtworkDescription artwork={currentArtwork} />
      {currentArtwork.category_titles && <Chips items={currentArtwork.category_titles} />}
    </ScrollView>
  );
}

export default ArtworkDetail;
