import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { ScreenNames } from "../screens/ScreenNames";
import ArtworkDetail from "../screens/ArtworkDetail/ArtworkDetail";
import FavoritesArtworks from "../screens/FavoritesArtworks/FavoritesArtworks";
import i18n from "../i18n/locales";

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
            options={{ headerTitle: i18n.t("FAVORITES") }}
          />
          <Stack.Screen
            name={ScreenNames.ArtworkDetail}
            component={ArtworkDetail}
            options={{ headerTitle: i18n.t("ARTWORK_DETAIL") }}
          />
        </Stack.Group>
        
      </Stack.Navigator>
    </>
  );
}

export default FavoritesArtworksStack;