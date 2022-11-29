import React from 'react';
import styled from 'styled-components/native';

import {colors} from '../../config/colors';
import textStyles from './textStyles';
import {StyledTextProps, TextProps, MyTextProps, getFont} from './types';

const StyledText = styled.Text`
  color: ${colors.gray};
  ${(props: StyledTextProps) => textStyles(props)}
  font-family: Lato-Regular;
`;

const RegularText = (props: MyTextProps) => {
  const {bold, weight} = props;

  const font = getFont({
    isBold: bold || weight === '700',
    weight: weight ? Number(weight) : 0,
  });

  return (
    <StyledText font={font} {...props} onPress={props.onClick}>
      {props.children}
    </StyledText>
  );
};

export default RegularText;
