import React, {FC} from 'react';
import styled from 'styled-components/native';
import {colors} from '../../config/colors';
import RegularText from '../Texts/RegularText';
import {BalanceCardProps} from './types';
import {View} from 'react-native';
import SmallText from '../Texts/SmallText';
import Background from '../../assets/bgs/background_transparent.png';

const CardBackground = styled.ImageBackground`
  height: 75%;
  width: 100%;
  resize-mode: cover;
  background-color: ${colors.tertiary};
  border-radius: 25px;
  overflow: hidden;
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
  height: 80%;
  resize-mode: contain;
  flex: 1;
`;

const BalanceCard: FC<BalanceCardProps> = ({accountNo, balance, logo}) => {
  return (
    <CardBackground source={Background}>
      <TouchableView>
        <CardRow>
          <RegularText textStyle={{color: colors.white}}>
            {accountNo}
          </RegularText>
        </CardRow>
        <CardRow>
          <View style={{flex: 3}}>
            <SmallText textStyle={{color: colors.graydark, marginBottom: 4}}>
              Account Balance
            </SmallText>
            <RegularText textStyle={{color: colors.graydark}}>
              $ {balance}
            </RegularText>
          </View>
          <Logo source={logo} />
        </CardRow>
      </TouchableView>
    </CardBackground>
  );
};

export default BalanceCard;
