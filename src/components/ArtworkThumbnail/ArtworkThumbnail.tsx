import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { ScreenNames } from '../../screens/ScreenNames';
import FireIcon from '../FireIcon/FireIcon';
import { useDispatch, useSelector } from 'react-redux';
import { addArtworkToFavorites, removeArtworkToFavorites, selectedArtwork } from '../../store/slices/artworksSlice';
import { getIsFavoriteArtwork } from '../../store/selectors/artworksSelectors';
import { Artwork } from '../../interfaces';


const ArtworkThumbnail = ({ artwork }: { artwork: Artwork }): JSX.Element => {
  const navigation = useNavigation();
  const isFavorite = useSelector(getIsFavoriteArtwork(artwork.id));

  const dispatch = useDispatch();

  const handleOnPressFavorite = () => {
    ;
    if (isFavorite) {
      dispatch(removeArtworkToFavorites(artwork))
    } else {
      dispatch(addArtworkToFavorites(artwork))
    }
  }

  const renderFavoriteIcon = () => {
    return (
      <TouchableOpacity onPress={handleOnPressFavorite} style={{ backgroundColor: 'yellow' }}>
        <FireIcon isSelected={isFavorite} />
      </TouchableOpacity>
    )
  }

  const onPressArtwork = () => {
    dispatch(selectedArtwork(artwork));
    navigation.navigate(ScreenNames.ArtworkDetail);
  }

  return (
    <View>
      {renderFavoriteIcon()}
      <TouchableOpacity onPress={onPressArtwork} style={{ marginVertical: 5, backgroundColor: 'gray' }}>
        <View style={{ flex: 1 }}>
          <Text>{artwork.title}</Text>
          <Text>{artwork.artist_title}</Text>
          {artwork?.thumbnail && (
            <>
              <Image
                style={{ width: 66, height: 58 }}
                source={{
                  uri: artwork.thumbnail.lqip,
                }}
              />
              <Image
                style={{ width: 66, height: 58 }}
                source={{
                  uri: `https://www.artic.edu/iiif/2/${artwork.image_id}/full/200,/0/default.jpg` // TODO: REVISAR URL
                }}
              />
            </>
          )}
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default ArtworkThumbnail;