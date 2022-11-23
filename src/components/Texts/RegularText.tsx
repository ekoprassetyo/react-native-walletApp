import React, {FC} from 'react';
import styled from 'styled-components/native';

import { colors } from '../../config/colors';
import { TextProps } from './types';

const StyledText = styled.Text`
    color: ${colors.gray};
    font-size: 18px;
    text-align: left;
    font-family: Lato-Regular;
`;

const RegularText: FC<TextProps> = ({ textStyle, children }) => {
    return <StyledText style={textStyle}>{children}</StyledText>
}

export default RegularText;