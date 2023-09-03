import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { ScreenNames } from "../screens/ScreenNames";
import ArtworkDetail from "../screens/ArtworkDetail/ArtworkDetail";
import FavoritesArtworks from "../screens/FavoritesArtworks/FavoritesArtworks";

const Stack = createNativeStackNavigator();

const FavoritesArtworksStack = () => {
  return (
    <>  
      <Stack.Navigator
        initialRouteName={ScreenNames.FavoritesArtworks}
        screenOptions={{
          presentation: "card",
          headerShown: true,
        }}
      >
        <Stack.Group>
          <Stack.Screen
            name={ScreenNames.FavoritesArtworks}
            component={FavoritesArtworks}
          />
          <Stack.Screen
            name={ScreenNames.ArtworkDetail}
            component={ArtworkDetail}
            // options={{ presentation: "modal", headerShown: false }}
          />
        </Stack.Group>
        
      </Stack.Navigator>
    </>
  );
}

export default FavoritesArtworksStack;