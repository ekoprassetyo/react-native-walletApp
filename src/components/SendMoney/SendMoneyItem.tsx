import React, {FC} from 'react';
import styled from 'styled-components/native';
import {colors} from '../../config/colors';
import Profile from '../Header/Profile';
import {ScreenWidth} from '../shared';
import RegularText from '../Texts/RegularText';
import SmallText from '../Texts/SmallText';
import {SendMoneyProps} from './types';

const SendMoneyItemContainer = styled.TouchableHighlight`
  height: 130px;
  width: ${ScreenWidth * 0.27}px;
  padding: 10px;
  border-radius: 15px;
  justify-content: space-around;
  margin: 0px 10px 10px 0px;
`;

const SendMoneyItem: FC<SendMoneyProps> = ({
  background,
  image,
  name,
  amount,
}) => {
  return (
    <SendMoneyItemContainer
      underlayColor={colors.graydark}
      style={{backgroundColor: background}}
      onPress={() => console.log(`Sending ${amount} to ${name}`)}>
        <>
            <Profile image={image} imageContainerStyle={{marginBottom: 10}}/>
            <SmallText textStyles={{color: colors.secondary}}>{name}</SmallText>
            <RegularText textStyles={{color: colors.secondary}}>{amount}</RegularText>
        </>
      </SendMoneyItemContainer>
  );
};

export default SendMoneyItem;
