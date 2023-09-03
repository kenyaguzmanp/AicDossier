import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../../screens/Home/Home';
import { ScreenNames } from '../../screens/ScreenNames';
// import FavoritesArtworks from '../../screens/FavoritesArtworks/FavoritesArtworks';
import ArtworksStack from '../../navigation/ArtworksStack';
import FavoritesArtworksStack from '../../navigation/FavoritesArtworksStack';

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name={ScreenNames.Home} component={Home} />
      <Tab.Screen name={ScreenNames.Artworks} component={ArtworksStack} options={{ headerShown: false }} />
      <Tab.Screen name={ScreenNames.FavoritesArtworks} component={FavoritesArtworksStack} options={{ headerShown: false }} />
    </Tab.Navigator>
  );
};

export default BottomTabs;