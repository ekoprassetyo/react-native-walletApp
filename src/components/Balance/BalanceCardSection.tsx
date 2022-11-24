import React, {FC} from 'react';
import styled from 'styled-components/native';
import { colors } from '../../config/colors';
import BalanceCard from './BalanceCard';
import { BalanceCardProps } from './types';

const BalanceCardSectionBackground = styled.View`
    flex: 2;
    align-items: center;
    width: 100%;
`;

const BalanceCardSection : FC<BalanceCardProps> = ( props ) => {
    return(
        <BalanceCardSectionBackground>
            <BalanceCard {...props}/>
        </BalanceCardSectionBackground>
    )
}

export default BalanceCardSection;