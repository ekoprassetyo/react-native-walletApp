import React, {FC} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Welcome from '../screens/Welcome';
import Home from '../screens/Home';
import {colors} from '../config/colors';
import Profile from '../components/Header/Profile';

import Avatar from '../assets/avi/avatar.png';
import Greeting from '../components/Header/Greeting';

export type RootParamList = {
  Welcome: undefined;
  Home: undefined;
};

const Stack = createStackNavigator<RootParamList>();

const RootNavigation: FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: colors.graylight,
            borderBottomWidth: 0,
            shadowColor: 'transparent',
            shadowOpacity: 0,
            elevation: 0,
            height: 120,
          },
          headerTintColor: colors.secondary,
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
                backgroundColor: colors.tertiary,
              }}
            />
          ),
        }}
        initialRouteName="Welcome">
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerTitle: (props) => (
              <Greeting
                mainText="Hey Jude"
                subText="Dont make it bad"
                {...props}
              />
            ),
            headerLeft: () => null,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;
