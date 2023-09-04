import React, { useState } from 'react';
import {
  FlatList,
  View,
} from 'react-native';
import ArtworkThumbnail from '../ArtworkThumbnail/ArtworkThumbnail';
import { enhancedFetchArtworks } from '../../api/services';
import { noop } from 'lodash';
import Spinner from '../../Spinner/Spinner';
import RetryDetail from '../RetryDetail/RetryDetail';

const renderItem = ({ item }) => {
  return (
    <ArtworkThumbnail artwork={item} />
  )
}

const ArtworksList = ({ data, shouldHandleOnEnd = true }): JSX.Element => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [isLoadingMore, setIsLoadingMore] = useState<boolean>(false);
  const [isRefreshing, setIsRefreshing] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const onRetry = () => {
    enhancedFetchArtworks({
      serviceParams: {
        page: 1,
        fakeService: false
      },
      setLoadingState: setIsLoading,
    });
  }

  if (isLoading) {
    return (
      <View style={{ justifyContent: "center", alignSelf: "center", paddingVertical: 50 }}>
        <Spinner size="large" />
      </View>
    );
  }

  if (data.length === 0) {
    return (
      <>
        <RetryDetail onRetry={onRetry}/>
      </>
    )
  }

  const ListFooter = () => {
    if (!isLoadingMore) {
      return null;
    }
  
    return (
      <View style={{ justifyContent: "center", alignSelf: "center", paddingVertical: 50 }}>
        <Spinner size="large" />
      </View>
    );
  };

  const onEndReached = () => {
    enhancedFetchArtworks({
      onPreRequest: () => {
        setCurrentPage(currentPage + 1);
      },
      setLoadingState: setIsLoadingMore,
      serviceParams: {
        page: currentPage + 1
      }
    });
  }

  const onRefresh = () => {
    enhancedFetchArtworks({
      setLoadingState: setIsRefreshing,
      serviceParams: {
        page: 1,
        fakeService: false
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