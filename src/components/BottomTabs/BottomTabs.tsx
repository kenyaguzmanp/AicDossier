import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../../screens/Home/Home';
import ArtworksStack from '../../navigation/ArtworksStack';
import FavoritesArtworksStack from '../../navigation/FavoritesArtworksStack';
import i18n from '../../i18n/locales';

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name={i18n.t("HOME")} component={Home} />
      <Tab.Screen name={i18n.t("EXPLORE")} component={ArtworksStack} options={{ headerShown: false }} />
      <Tab.Screen name={i18n.t("FAVORITES")} component={FavoritesArtworksStack} options={{ headerShown: false }} />
    </Tab.Navigator>
  );
};

export default BottomTabs;