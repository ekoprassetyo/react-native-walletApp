import React, {FC} from 'react';
import styled from 'styled-components/native';
import RegularText from '../Texts/RegularText';
import SmallText from '../Texts/SmallText';
import { AmountProps } from './types';
import { colors } from '../../config/colors';

const AmountSectionBackground = styled.View`
    width: 100%;
    flex: 1;
    padding-top: 5px;
    align-items: center;
`;

const AmountSection: FC<AmountProps> = ({ balance }) => {
    return (
        <AmountSectionBackground>
            <SmallText textStyles={{color: colors.secondary, fontSize: 25, marginBottom: 10}}>Total Balance</SmallText>
            <RegularText textStyles={{color: colors.secondary}}>$ {balance}</RegularText>
        </AmountSectionBackground>

    )
}

export default AmountSection;