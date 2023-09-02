import React, { useEffect } from "react";
import { Text, View } from "react-native";
import { enhancedFetchArtworks } from "../../api/services";

const Home = () => {

  useEffect(() => {
    console.log("🚀 ~ file: Home.tsx:19 ~ Home ~ Home:", Home)

    enhancedFetchArtworks({});
    
  }, []);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen PAGE</Text>
    </View>
  );
}

export default Home;
  