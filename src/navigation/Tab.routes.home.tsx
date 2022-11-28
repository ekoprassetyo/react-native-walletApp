import React, {FC} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import RegisterPage from '../tabscreens/Register/RegisterPage';
import {colors} from '../config/colors';
import HomeIcon from 'react-native-vector-icons/AntDesign'
import Home from '../tabscreens/Menu/Home';
import Quotes from '../tabscreens/Menu/Quotes';
import Buy from '../tabscreens/Menu/Buy';
import Sell from '../tabscreens/Menu/Sell';
import BalAndPos from '../tabscreens/Menu/BalAndPos';

const {Navigator, Screen} = createBottomTabNavigator();

const AppTabRoutesHome: FC = () => {
  return (
    <Navigator>
      <Screen
        name="Quotes"
        component={Quotes}
        options={{
          tabBarIcon: () => <HomeIcon name="home" size={30}/>,
          headerShown: false,
        }}
      />
      <Screen
        name="Buy"
        component={Buy}
        options={{
          tabBarIcon: () => <HomeIcon name="home" size={30}/>,
          headerShown: false,
        }}
      />
      <Screen
        name="Sell"
        component={Sell}
        options={{
          tabBarIcon: () => <HomeIcon name="home" size={30}/>,
          headerShown: false,
        }}
      />
      <Screen
        name="Bal And Pos"
        component={BalAndPos}
        options={{
          tabBarIcon: () => <HomeIcon name="home" size={30}/>,
          headerShown: false,
        }}
      />
      <Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: () => <HomeIcon name="home" size={30}/>,
          headerShown: false,
        }}
      />
    </Navigator>
  );
};

export default AppTabRoutesHome;
