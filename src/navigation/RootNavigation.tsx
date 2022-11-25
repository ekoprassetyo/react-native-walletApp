import React, {FC} from 'react';
import { NavigationContainer, useTheme, DefaultTheme, DarkTheme } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Welcome from '../screens/Welcome';
import Home from '../screens/Home';
// import {colors} from '../config/colors';
import Profile from '../components/Header/Profile';

import Avatar from '../assets/avi/avatar.png';
import Greeting from '../components/Header/Greeting';
import {CardProps} from '../components/Cards/types';
import Balance from '../screens/Balance';
import Icon from 'react-native-vector-icons/Ionicons';
import { useColorScheme } from 'react-native';
import LoginPage from '../screens/LoginPage';
import AppTabRoutes from './Tab.routes';

export type RootParamList = {
  Welcome: undefined;
  Home: undefined;
  Balance: CardProps;
  LoginPage: undefined;
  RegisterPage: undefined;
};


const {Navigator, Screen} = createStackNavigator<RootParamList>();

const RootNavigation: FC = () => {
  const { colors } = useTheme()
  const scheme = useColorScheme();

  return (
    <NavigationContainer theme={scheme === 'dark' ? DarkTheme : DefaultTheme }>
      <Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: colors.background,
            borderBottomWidth: 0,
            shadowColor: 'transparent',
            shadowOpacity: 0,
            elevation: 0,
            height: 120,
          },
          headerTintColor: colors.text,
          headerRightContainerStyle: {
            paddingRight: 20,
          },
          headerLeftContainerStyle: {
            paddingLeft: 10,
          },
          headerRight: () => (
            <Profile
              image={Avatar}
              imageContainerStyle={{
                backgroundColor: colors.border,
              }}
            />
          ),
        }}
        initialRouteName="Welcome">
        <Screen
          name="Welcome"
          component={Welcome}
          options={{headerShown: false}}
        />
        <Screen name='LoginPage' component={LoginPage} options={{headerShown: false}} />
        <Screen name='RegisterPage' component={AppTabRoutes} options={{headerShown: false}} />
        <Screen
          name="Home"
          component={Home}
          options={{
            headerTitle: props => (
              <Greeting
                mainText="Hello Guest"
                subText="Welcome Back"
                {...props}
              />
            ),
            headerLeft: () => null,
          }}
        />
        <Screen
          name="Balance"
          component={Balance}
          options={({route}) => ({
            headerTitle: route?.params?.alias,
            headerTitleAlign: 'center',
            headerBackImage: props => (
              <Icon name="chevron-back" size={25} color={colors.text} />
            ),
            headerLeftContainerStyle: {
              paddingLeft: 0,
            },
          })}
        />
      </Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;
