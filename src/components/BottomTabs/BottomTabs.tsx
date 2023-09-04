import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import ArtworksStack from '../../navigation/ArtworksStack';
import FavoritesArtworksStack from '../../navigation/FavoritesArtworksStack';
import i18n from '../../i18n/locales';
import IconHome from '../HomeIcon/HomeIcon';
import ExploreIcon from '../ExploreIcon/ExploreIcon';
import FavoriteIcon from '../FavoriteIcon/FavoriteIcon';
import HomeStack from '../../navigation/HomeStack';
import { ScreenNames } from '../../screens/ScreenNames';

const Tab = createMaterialBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName={ScreenNames.Home}
      shifting={true}
      sceneAnimationEnabled={false}
    >
      <Tab.Screen 
        name={i18n.t("HOME")} 
        component={HomeStack} 
        options={{
          tabBarIcon: () => {
            return (
              <IconHome />
            )
          },
        }}
      />
      <Tab.Screen
        name={i18n.t("EXPLORE")} 
        component={ArtworksStack} 
        options={{ 
          tabBarIcon: () => {
            return (
              <ExploreIcon />
            )
          },
        }} 
      />
      <Tab.Screen 
        name={i18n.t("FAVORITES")} 
        component={FavoritesArtworksStack} 
        options={{ 
          tabBarIcon: () => {
            return (
              <FavoriteIcon />
            )
          },
        }} 
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;