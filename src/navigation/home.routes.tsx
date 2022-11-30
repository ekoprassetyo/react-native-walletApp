import {createDrawerNavigator} from '@react-navigation/drawer';
import React from 'react';
import {colors} from '../config/colors';
import Quotes from '../screens/tabscreens/Menu/Quotes';
import AppTabRoutesHome from './Tab.routes.home';
import HomeContent from '../components/Drawer/DrawerMenu/Home';
import StackNavigation from './StackNavigation';

const {Navigator, Screen} = createDrawerNavigator();

const DrawerHomeNavigation = () => {
  return (
    <Navigator
      id="DrawerHome"
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.codGrey,
        },
        headerTintColor: colors.accent,
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
      drawerContent={ () => <HomeContent  />}>
      <Screen name="HomeDrawer" component= {StackNavigation} />
    </Navigator>
  );
};

export default DrawerHomeNavigation;
