import React, {FC} from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Container} from './style';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {colors} from '../../../config/colors';
import RegularText from '../../Texts/RegularText';

interface CustomDrawerProps {
  navigation: any;
  state: any;
}

const drawerMenuHome = [
  {link: 'Dashboard', icon: 'chart-box-outline'},
  {link: 'Detail', icon: 'expand-all-outline'},
  {link: 'Watchlist', icon: 'cash-minus'},
];

const DrawerHome: FC<CustomDrawerProps> = ({navigation, state}) => {
  return (
    <>
      {drawerMenuHome?.map((item, index) => (
        <Container key={index}>
          <TouchableOpacity
            onPress={() => {
              if (state?.index !== index) {
                return navigation.navigate(item?.link);
              }
            }}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              paddingHorizontal: 10,
              paddingVertical: 8,
              borderRadius: 5,
              backgroundColor:
                state?.index === index ? colors.graylight : colors.white,
            }}>
            <Icon
              name={item?.icon}
              size={25}
              color={colors.gray}
              style={{marginEnd: 10}}
            />
            <RegularText bold textStyles={{marginLeft: 10, fontSize: 16}}>
              {item?.link}
            </RegularText>
          </TouchableOpacity>
        </Container>
      ))}
    </>
  );
};

export default DrawerHome;
