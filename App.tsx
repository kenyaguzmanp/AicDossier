import React, { useEffect, useState } from 'react';
import type {PropsWithChildren} from 'react';
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

import {
  Colors,
  Header,
} from 'react-native/Libraries/NewAppScreen';
import { enhancedFetchArtworks } from './src/api/services';
import { store } from './src/store/store';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({children, title}: SectionProps): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}

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

const Artworks = ({ data }): JSX.Element => {
  if (data.length === 0) {
    return (
      <View style={{ flex: 1, backgroundColor: 'yellow' }}>
        <Text>NO DATA</Text>
      </View>
    )
  }
  return (
    <View style={{ flex: 1 }}>
      <FlatList data={data} renderItem={renderItem} keyExtractor={(item, index) => index.toString()}/>
    </View>
  )
}

const AppContent = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const [isLoading, setIsLoading] = useState(true);

  const artworks = useSelector((state) => state?.artworks?.artworks);

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

    useEffect(() => {
      enhancedFetchArtworks({
        setLoadingState: setIsLoading,
      });
  }, []);

  return (
    <>
      <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Section title="is loading:">
            <Text style={styles.highlight}>{`${isLoading}`}</Text> 
          </Section>
          <View>
            <Artworks data={artworks} />
          </View>
          
        </View>
      </ScrollView>
  </SafeAreaView>
    </>
  )
}

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <AppContent />
    </Provider>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
