import React from 'react';
import {
  FlatList,
  Text,
  View,
} from 'react-native';
import ArtworkThumbnail from '../ArtworkThumbnail/ArtworkThumbnail';

const renderItem = ({ item }) => {
  return (
    <ArtworkThumbnail artwork={item} />
  )
}

const ArtworksList = ({ data }): JSX.Element => {
  if (data.length === 0) {
    return (
      <View style={{ flex: 1, backgroundColor: 'yellow' }}>
        <Text>NO DATA</Text>
      </View>
    )
  }
  return (
    <View style={{ flex: 1 }}>
      <FlatList data={data} renderItem={renderItem} keyExtractor={(item, index) => index.toString()} />
    </View>
  )
}

export default ArtworksList;