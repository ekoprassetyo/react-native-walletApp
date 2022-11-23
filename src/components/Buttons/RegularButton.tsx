import React, {FC} from 'react';
import styled from 'styled-components/native';

import { colors } from '../../config/colors';
import RegularText from '../Texts/RegularText';
import { ButtonProps } from './types';

const ButtonView = styled.TouchableOpacity`
    background-color: ${colors.primary};
    padding: 20px;
    border-radius: 25px;
    width: 100%;
    align-items: center;
`;


const RegularButton: FC<ButtonProps> = ({
    children, onPress, btnStyle, textStyle
}) => {
    return (
        <ButtonView onPress={onPress} style={btnStyle}>
			<RegularText textStyle={textStyle}>{children}</RegularText>
		</ButtonView>
	);
}

export default RegularButton;