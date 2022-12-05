import React, { FC } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import DrawerHomeNavigation from './home.routes';
import StackNavigation from './StackNavigation';


const Routes: FC = () => {
    return (
        <NavigationContainer >
            <DrawerHomeNavigation />
        </NavigationContainer>
    );
}

export default Routes;