import React, {FC} from 'react';
import styled from 'styled-components/native';

import {colors} from '../../config/colors';
import {TextProps} from './types';

const StyledText = styled.Text`
  color: ${colors.gray};
  font-size: 35px;
  text-align: left;
  font-family: Lato-Bold;
`;

const BigText: FC<TextProps> = ({textStyles, children}) => {
  return <StyledText style={textStyles}>{children}</StyledText>;
};

export default BigText;
