import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { ScreenNames } from "../screens/ScreenNames";
import Artworks from "../screens/Artworks/Artworks";
import ArtworkDetail from "../screens/ArtworkDetail/ArtworkDetail";

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

export default ArtworksStack;