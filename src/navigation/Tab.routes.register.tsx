import React, {FC} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import RegisterPage from '../tabscreens/Register/RegisterPage';
import RegisterDocumentUpload from '../tabscreens/Register/RegisterDocumentUpload';
import DocumentIcon from 'react-native-vector-icons/FontAwesome';
import FormIcon from 'react-native-vector-icons/AntDesign';
import VerificationIcon from 'react-native-vector-icons/MaterialIcons';
import {colors} from '../config/colors';
import VerificationPage from '../tabscreens/Register/VerificationPage';

const {Navigator, Screen} = createBottomTabNavigator();

const AppTabRoutesRegister: FC = () => {
  return (
    <Navigator>
      <Screen
        name="Personal Data"
        component={RegisterPage}
        options={{
          tabBarIcon: () => <FormIcon name="form" size={30} />,
          headerShown: false,
        }}
      />
      <Screen
        name="Document Upload"
        component={RegisterDocumentUpload}
        options={{
          tabBarIcon: () => <DocumentIcon name="id-card" size={30} />,
          headerShown: false,
        }}
      />
      <Screen
        name="Verification Page"
        component={VerificationPage}
        options={{
          tabBarIcon: () => (
            <VerificationIcon name="domain-verification" size={35} />
          ),
          headerShown: false,
        }}
      />
    </Navigator>
  );
};

export default AppTabRoutesRegister;
