import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { ScreenNames } from "../screens/ScreenNames";
import Artworks from "../screens/Artworks/Artworks";
import i18n from "../i18n/locales";
import FavoritesArtworks from "../screens/FavoritesArtworks/FavoritesArtworks";
import Home from "../screens/Home/Home";

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <>  
      <Stack.Navigator
        initialRouteName={ScreenNames.Home}
        screenOptions={{
          presentation: "card",
          headerShown: true,
        }}
      >
        <Stack.Group>
          <Stack.Screen
            name={ScreenNames.Home}
            component={Home}
            options={{ 
              headerTitle: i18n.t("HOME"),
              header: () => null
            }}
          />
          <Stack.Screen
            name={ScreenNames.Artworks}
            component={Artworks}
            options={{ headerTitle: i18n.t("EXPLORE") }}
          />
          <Stack.Screen
            name={ScreenNames.FavoritesArtworks}
            component={FavoritesArtworks}
            options={{ headerTitle: i18n.t("FAVORITES") }}
          />
        </Stack.Group>
        
      </Stack.Navigator>
    </>
  );
}

export default HomeStack;