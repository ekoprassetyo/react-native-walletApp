import React, {FC} from 'react';
import styled from 'styled-components/native';
import { TransactionItemProps } from './types';
import Icon from 'react-native-vector-icons/Ionicons';
import { colors } from '../../config/colors';

const StyledView = styled.View`
    height: 45px;
    width: 45px;
    border-radius: 10px;
    justify-content: center;
    align-items: center;
`;


const Transaction: FC<TransactionItemProps> = ({ background, icon }) => {
    return (
        <StyledView style={{backgroundColor: background}}>
            <Icon name={icon} size={25} color={colors.white} />
        </StyledView>
    )
}

export default Transaction;