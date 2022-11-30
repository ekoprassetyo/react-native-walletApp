import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {colors} from '../config/colors';
import DrawerHome from '../components/Drawer/DrawerHome/DrawerHome';
import Dashboard from '../screens/drawer/Home/Dashboard';
import Watchlist from '../screens/drawer/Home/Watchlist';
import Home from '../screens/tabscreens/Menu/Home';
import Quotes from '../screens/tabscreens/Menu/Quotes';
import AppTabRoutesHome from './Tab.routes.home';

const {Navigator, Screen} = createDrawerNavigator();

const DrawerHomeRoute = () => {
  return (
    <Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.codGrey,
        },
        headerTintColor: colors.accent,
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
      drawerContent={props => <DrawerHome {...props} />}
      initialRouteName="Watchlist">
      <Screen name="Tabs" component={AppTabRoutesHome} />
      <Screen name="Watchlist" component={Quotes} />
    </Navigator>
  );
};

export default DrawerHomeRoute;
