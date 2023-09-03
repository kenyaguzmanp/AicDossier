import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { ScreenNames } from '../../screens/ScreenNames';


const ArtworkThumbnail = ({ artwork }): JSX.Element => {
  const navigation = useNavigation();

  const onPressArtwork = () => {
    navigation.navigate(ScreenNames.ArtworkDetail);
  }

  return (
    <View>
      <TouchableOpacity onPress={onPressArtwork} style={{ marginVertical: 5, backgroundColor: 'gray' }}>
        <View style={{ flex: 1 }}>
          <Text>{artwork.title}</Text>
          <Text>{artwork.artist_title}</Text>
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
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default ArtworkThumbnail;