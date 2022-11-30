import React, {FC} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import RegisterPage from '../screens/tabscreens/Register/RegisterPage';
import {colors} from '../config/colors';
import HomeIcon from 'react-native-vector-icons/AntDesign'
import Home from '../screens/tabscreens/Menu/Home';
import Quotes from '../screens/tabscreens/Menu/Quotes';
import Buy from '../screens/tabscreens/Menu/Buy';
import Sell from '../screens/tabscreens/Menu/Sell';
import BalAndPos from '../screens/tabscreens/Menu/BalAndPos';

const {Navigator, Screen} = createBottomTabNavigator();

const AppTabRoutesHome: FC = () => {
  return (
    <Navigator>
      <Screen
        name="Quotes"
        component={Quotes}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <HomeIcon name="home" size={30} color={focused ? colors.primary : colors.graydark}/>
            )
          },
          headerShown: false,
        }}
      />
      <Screen
        name="Buy"
        component={Buy}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <HomeIcon name="home" size={30} color={focused ? colors.primary : colors.graydark}/>
            )
          },
          headerShown: false,
        }}
      />
      <Screen
        name="Sell"
        component={Sell}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <HomeIcon name="home" size={30} color={focused ? colors.primary : colors.graydark}/>
            )
          },
          headerShown: false,
        }}
      />
      <Screen
        name="Bal And Pos"
        component={BalAndPos}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <HomeIcon name="home" size={30} color={focused ? colors.primary : colors.graydark}/>
            )
          },
          headerShown: false,
        }}
      />
      <Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <HomeIcon name="home" size={30} color={focused ? colors.primary : colors.graydark}/>
            )
          },
          headerShown: false,
        }}
      />
    </Navigator>
  );
};

export default AppTabRoutesHome;
