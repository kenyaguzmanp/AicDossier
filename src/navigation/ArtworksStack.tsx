import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { ScreenNames } from "../screens/ScreenNames";
import Artworks from "../screens/Artworks/Artworks";
import ArtworkDetail from "../screens/ArtworkDetail/ArtworkDetail";
import i18n from "../i18n/locales";

const Stack = createNativeStackNavigator();

const ArtworksStack = () => {
  return (
    <>  
      <Stack.Navigator
        initialRouteName={ScreenNames.Artworks}
        screenOptions={{
          presentation: "card",
          headerShown: true,
        }}
      >
        <Stack.Group>
          <Stack.Screen
            name={ScreenNames.Artworks}
            component={Artworks}
            options={{ headerTitle: i18n.t("EXPLORE") }}
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

export default ArtworksStack;