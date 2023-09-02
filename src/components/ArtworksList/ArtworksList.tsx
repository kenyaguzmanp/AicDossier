import React, { useEffect, useState } from 'react';
import type { PropsWithChildren } from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { Provider, useSelector } from 'react-redux';

const renderItem = ({ item }): JSX.Element => {
  return (
    <View style={{ marginVertical: 5, backgroundColor: 'gray' }}>
      <Text>{item.title}</Text>
      <Text>{item.artist_title}</Text>
      <Image
        style={{ width: 66, height: 58 }}
        source={{
          uri: item.thumbnail.lqip,
        }}
      />
      <Image
        style={{ width: 66, height: 58 }}
        source={{
          uri: `https://www.artic.edu/iiif/2/${item.image_id}/full/200,/0/default.jpg` // TODO: REVISAR URL
        }}
      />
    </View>
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