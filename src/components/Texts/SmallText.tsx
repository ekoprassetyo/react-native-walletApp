import React, {FC} from 'react';
import styled from 'styled-components/native';

import { colors } from '../../config/colors';
import { TextProps } from './types';

const StyledText = styled.Text`
    color: ${colors.gray};
    font-size: 13px;
    text-align: left;
    font-family: Lato-Regular;
`;

const SmallText: FC<TextProps> = ({ textStyles, children }) => {
    return <StyledText style={textStyles}>{children}</StyledText>
}

export default SmallText;