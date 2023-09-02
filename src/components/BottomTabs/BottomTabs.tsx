import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../../screens/Home/Home';
import { ScreenNames } from '../../screens/ScreenNames';
import Artworks from '../../screens/Artworks/Artworks';
import FavoritesArtworks from '../../screens/FavoritesArtworks/FavoritesArtworks';

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name={ScreenNames.Home} component={Home} />
      <Tab.Screen name={ScreenNames.Artworks} component={Artworks} />
      <Tab.Screen name={ScreenNames.FavoritesArtworks} component={FavoritesArtworks} />
    </Tab.Navigator>
  );
};

export default BottomTabs;