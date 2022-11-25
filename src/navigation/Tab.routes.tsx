import React, {FC} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import RegisterPage from '../tabscreens/Register/RegisterPage';
import RegisterDocumentUpload from '../tabscreens/Register/RegisterDocumentUpload';
import Icon from 'react-native-vector-icons/FontAwesome';
import FormIcon from 'react-native-vector-icons/AntDesign'
import { colors } from '../config/colors';

const {Navigator, Screen} = createBottomTabNavigator();

const AppTabRoutes: FC = () => {
  return (
    <Navigator>
      <Screen
        name="Personal Data"
        component={RegisterPage}
        options={{tabBarIcon: () => <FormIcon name='form' size={30} />}}
      />
      <Screen
        name="RegisterDocumentUpload"
        component={RegisterDocumentUpload}
        options={{tabBarIcon: () => <Icon name='id-card' size={30} />}}
      />
    </Navigator>
  );
};

export default AppTabRoutes;
