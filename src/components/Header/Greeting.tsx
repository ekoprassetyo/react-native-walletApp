import React, {FC} from 'react';
import styled from 'styled-components/native';
import RegularText from '../Texts/RegularText';
import SmallText from '../Texts/SmallText';
import {GreetingProps} from './types';
import {colors} from '../../config/colors';

const StyledView = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: center;
`;

const Greeting: FC<GreetingProps> = ({
  mainText,
  subText,
  mainTextStyle,
  subTextStyle,
}) => {
  return (
    <StyledView>
      <RegularText
        textStyle={[
          {
            fontSize: 25,
            color: colors.secondary,
          },
          mainTextStyle,
        ]}>
        {mainText}
      </RegularText>
      <SmallText
        textStyle={[
          {
            marginTop: 5,
            color: colors.graydark,
          },
          subTextStyle,
        ]}>
        {subText}
      </SmallText>
    </StyledView>
  );
};

export default Greeting;
