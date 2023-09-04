import React from 'react';
import { Card, Text } from 'react-native-paper';
import { getThumbnailImageUrl } from '../../utils/artworkDetails';
import { TouchableOpacity } from 'react-native';
import FavoriteIcon from '../FavoriteIcon/FavoriteIcon';
import { useDispatch, useSelector } from 'react-redux';
import { getIsFavoriteArtwork } from '../../store/selectors/artworksSelectors';
import { addArtworkToFavorites, removeArtworkToFavorites } from '../../store/slices/artworksSlice';


const ArtworkCard = ({ artwork  }) => {

  const isFavorite = useSelector(getIsFavoriteArtwork(artwork.id));

  const dispatch = useDispatch();

  const handleOnPressFavorite = () => {
    if (isFavorite) {
      dispatch(removeArtworkToFavorites(artwork))
    } else {
      dispatch(addArtworkToFavorites(artwork))
    }
  }

  const renderFavoriteIcon = () => {
    return (
      <TouchableOpacity onPress={handleOnPressFavorite}>
        <FavoriteIcon isSelected={isFavorite} />
      </TouchableOpacity>
    )
  }
  
  const RightContent = () => renderFavoriteIcon();

  return (
    <Card>
      <Card.Title title={artwork.title} subtitle={artwork.artist_title} right={RightContent} />
      <Card.Cover source={{ uri: getThumbnailImageUrl(artwork.image_id) }} />
      {artwork?.thumbnail?.alt_text && (
        <Card.Content>
          {/* <Text variant="titleLarge">{artwork.title}</Text> */}
          <Text variant="bodyMedium">{artwork.thumbnail.alt_text}</Text>
        </Card.Content>
      )}
    </Card>
  );
}

export default ArtworkCard;