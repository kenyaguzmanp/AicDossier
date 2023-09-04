import React, { useEffect } from "react";
import { Text, View } from "react-native";
import { enhancedFetchArtworks } from "../../api/services";
import { useDispatch } from "react-redux";
import { cleanArtworks } from "../../store/slices/artworksSlice";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    enhancedFetchArtworks({
      serviceParams: {
        page: 1
      }
    });

  }, []);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen PAGE</Text>
      <Text
        onPress={() => {
          enhancedFetchArtworks({
            serviceParams: {
              page: 1
            }
          });
        }}
      >
        fetch artworks
      </Text>
      <Text onPress={() => dispatch(cleanArtworks())}>Clean Artworks</Text>
    </View>
  );
}

export default Home;
  