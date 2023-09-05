import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity, View } from 'react-native';
import { ScreenNames } from '../../screens/ScreenNames';
import { Artwork } from '../../interfaces';
import ArtworkCard from '../ArtworkCard/ArtworkCard';

const ArtworkThumbnail = ({ artwork }: { artwork: Artwork }): JSX.Element => {
  const navigation = useNavigation();

  const onPressArtwork = () => {
    navigation.navigate(ScreenNames.ArtworkDetail, { artworkId: artwork.id });
  }

  return (
    <View>
      <TouchableOpacity onPress={onPressArtwork} style={{ marginVertical: 10 }}>
        <ArtworkCard artwork={artwork} />
      </TouchableOpacity>
    </View>
  )
}

export default ArtworkThumbnail;