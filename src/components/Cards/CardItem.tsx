import React, {FC} from 'react';
import styled from 'styled-components/native';
import {colors} from '../../config/colors';
import {ScreenWidth, Container} from '../shared';
import {CardProps} from './types';
import RegularText from '../Texts/RegularText';
import SmallText from '../Texts/SmallText';
import {View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import background from '../../assets/bgs/background_transparent.png';
import {Props as HomeProps} from '../../screens/Home';

const CardBackground = styled.ImageBackground`
  max-height: 25%;
  width: ${ScreenWidth * 0.67}px;
  resize-mode: cover;
  background-color: ${colors.primary};
  border-radius: 25px;
  margin-right: 25px;
  overflow: hidden;
  background-size: cover;
`;

const CardTouchable = styled.TouchableHighlight`
  height: 100%;
  border-radius: 25px;
`;

const TouchableView = styled.View`
  flex: 1;
  justify-content: space-between;
  align-items: center;
  padding: 30px;
`;

const CardRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const Logo = styled.Image`
  width: 100%;
  height: 88%;
  resize-mode: contain;
  flex: 1;
`;

const CardItem: FC<CardProps> = (props) => {
  const navigation = useNavigation<HomeProps['navigation']>();

  const handlePress = () => {
    navigation.navigate('Welcome');
  };

  return (
    <CardBackground source={background}>
      <CardTouchable underlayColor={colors.secondary} onPress={handlePress}>
        <TouchableView>
          <CardRow>
            <RegularText textStyle={{color: colors.graylight}}>{props.accountNo}</RegularText>
          </CardRow>
          <CardRow>
            <View style={{flex: 3}}>
              <SmallText textStyle={{color: colors.graylight}}>
                Account Balance
              </SmallText>
              <RegularText textStyle={{color: colors.graylight}}>
                $ {props.balance}
              </RegularText>
            </View>
            <Logo source={props.logo} />
          </CardRow>
        </TouchableView>
      </CardTouchable>
    </CardBackground>
  );
};

export default CardItem;
