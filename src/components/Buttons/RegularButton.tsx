import React, {FC} from 'react';
import styled from 'styled-components/native';

import { colors } from '../../config/colors';
import RegularText from '../Texts/RegularText';
import { ButtonProps } from './types';
import textStyles from '../Texts/textStyles';

const ButtonView = styled.TouchableOpacity`
    background-color: ${colors.primary};
    padding: 20px;
    border-radius: 25px;
    width: 100%;
    align-items: center;
`;


const RegularButton: FC<ButtonProps> = ({
    btnStyle,
    children,
    onPress,
    textStyle,
}) => {
    return (
        <ButtonView onPress={onPress} style={btnStyle}>
			<RegularText textStyles={textStyle}>{children}</RegularText>
		</ButtonView>
	);
}

export default RegularButton;