import React, { useEffect, useState } from 'react';
import {
  FlatList,
  Text,
  View,
} from 'react-native';
import ArtworkThumbnail from '../ArtworkThumbnail/ArtworkThumbnail';
import { enhancedFetchArtworks } from '../../api/services';
import { noop } from 'lodash';

const renderItem = ({ item }) => {
  return (
    <ArtworkThumbnail artwork={item} />
  )
}

const ArtworksList = ({ data, shouldHandleOnEnd = true }): JSX.Element => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [isLoadingMore, setIsLoadingMore] = useState<boolean>(false);
  const [isRefreshing, setIsRefreshing] = useState<boolean>(false);

  // TODO: Check to handle it better
  useEffect(() => {
    if (data?.length === 0) {
      enhancedFetchArtworks({
        serviceParams: {
          page: 1
        }
      });
    }
  }, []);


  if (data.length === 0) {
    return (
      <View style={{ flex: 1, backgroundColor: 'yellow' }}>
        <Text>NO DATA</Text>
      </View>
    )
  }

  const ListFooter = () => {
    if (!isLoadingMore) { // isLoading
      return null;
    }
  
    return (
      <View style={{ width: 200, height: 200, backgroundColor: "blue" }}>
        <Text>Loading....</Text>
      </View>
    );
  };

  const onEndReached = () => {
    enhancedFetchArtworks({
      onPreRequest: () => {
        // console.log("🥊 🚀 ~ file: ArtworksList.tsx:34 ~ onEndReached ~ onPreRequest:")
        setCurrentPage(currentPage + 1);
      },
      setLoadingState: setIsLoadingMore,
      serviceParams: {
        page: currentPage + 1
      }
    });
  }

  const onRefresh = () => {
    // console.log("🚀 ~ file: ArtworksList.tsx:56 ~ onRefresh ~ onRefresh:")
    enhancedFetchArtworks({
      setLoadingState: setIsRefreshing,
      serviceParams: {
        page: 1
      }
    });
  }

  return (
    <View style={{ flex: 1 }}>
      <FlatList 
        data={data}
        style={{ paddingHorizontal: 20 }}
        renderItem={renderItem}
        onEndReached={shouldHandleOnEnd ? onEndReached : noop}
        onEndReachedThreshold={0.1}
        ListFooterComponent={ListFooter}
        initialNumToRender={10}
        refreshing={isRefreshing}
        onRefresh={onRefresh}
        keyboardShouldPersistTaps="always"
        keyboardDismissMode="on-drag"
        keyExtractor={(item, index) => `${item.id}-${index.toString()}`} 
      />
    </View>
  )
}

export default ArtworksList;