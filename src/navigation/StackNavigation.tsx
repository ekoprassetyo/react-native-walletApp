import React, {FC} from 'react';
import {
  NavigationContainer,
  useTheme,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Welcome from '../screens/stackscreens/Welcome';
// import {colors} from '../config/colors';
import Profile from '../components/Header/Profile';

import Avatar from '../assets/avi/avatar.png';
import Greeting from '../components/Header/Greeting';
import {CardProps} from '../components/Cards/types';
import Balance from '../screens/stackscreens/Balance';
import Icon from 'react-native-vector-icons/Ionicons';
import {useColorScheme} from 'react-native';
import LoginPage from '../screens/stackscreens/LoginPage';
import AppTabRoutesRegister from './Tab.routes.register';
import AppTabRoutesHome from './Tab.routes.home';
import DrawerHomeRoute from './home.routes';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

export type RootParamList = {
  Welcome: undefined;
  Home: undefined;
  Balance: CardProps;
  LoginPage: undefined;
  RegisterPage: undefined;
};

const {Navigator, Screen, Group} = createNativeStackNavigator<RootParamList>();

const StackNavigation: FC = () => {
  const {colors} = useTheme();

  return (
    <>
      <Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: colors.background,
          },
          headerTintColor: colors.text,
          headerRight: () => (
            <Profile
              image={Avatar}
              imageContainerStyle={{
                backgroundColor: colors.border,
              }}
            />
          ),
        }}>
        <Group>
          <Screen
            name="Welcome"
            component={Welcome}
            options={{headerShown: false}}
          />
          <Screen
            name="LoginPage"
            component={LoginPage}
            options={{headerShown: false}}
          />

          <Screen
            name="Balance"
            component={Balance}
            options={({route}) => ({
              headerTitleAlign: 'center',
              headerBackImage: () => (
                <Icon name="chevron-back" size={25} color={colors.text} />
              ),
              headerLeftContainerStyle: {
                paddingLeft: 0,
              },
            })}
          />
        </Group>

        <Group>
          <Screen
            name="RegisterPage"
            component={AppTabRoutesRegister}
            options={{headerShown: false}}
          />

          <Screen
            name="Home"
            component={AppTabRoutesHome}
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
        </Group>
      </Navigator>
    </>
  );
};

export default StackNavigation;
