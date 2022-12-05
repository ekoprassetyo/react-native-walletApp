import {createDrawerNavigator} from '@react-navigation/drawer';
import React from 'react';
import {colors} from '../config/colors';
import Quotes from '../screens/tabscreens/Menu/Quotes';
import AppTabRoutesHome from './Tab.routes.home';
import HomeContent from '../components/Drawer/DrawerMenu/Home';
import StackNavigation from './StackNavigation';
import DrawerHome from '../components/Drawer/DrawerHome/DrawerHome';

const {Navigator, Screen} = createDrawerNavigator();

const DrawerHomeNavigation = () => {
  return (
    <Navigator
      id="DrawerHome"
      screenOptions={{
        headerShown: false
        // headerStyle: {
        //   backgroundColor: colors.graylight,
        // },
        // headerTintColor: colors.accent,
        // headerTitleStyle: {
        //   fontWeight: 'bold',
        // },
      }}
      drawerContent={props => <DrawerHome {...props} />}>
      <Screen
        name="HomeDrawer"
        component={StackNavigation}
        options={{
          drawerLabel: () => null,
          drawerItemStyle: {display: 'none'},
          drawerIcon: () => null,
        }}
      />
    </Navigator>
  );
};

export default DrawerHomeNavigation;
