import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import React, {FC} from 'react';
import RegularText from '../../Texts/RegularText';
import {colors} from '../../../config/colors';
import {useNavigation} from '@react-navigation/native';

const HomeContent: FC = () => {
  const navigation = useNavigation();

  return (
    <DrawerContentScrollView>
      <DrawerItem
        label={() => <RegularText color={colors.graydark}> Dashboard</RegularText>}
        // @ts-ignore
        onPress={() => navigation.navigate('Dashboard')}
      />
      <DrawerItem
        label={() => <RegularText color={colors.graydark}> Watchlist</RegularText>}
        // @ts-ignore
        onPress={() => navigation.navigate('Watchlist')}
      />
    </DrawerContentScrollView>
  );
};

export default HomeContent;
