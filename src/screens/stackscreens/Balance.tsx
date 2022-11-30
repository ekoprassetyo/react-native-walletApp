import React, {FC} from 'react';
import styled from 'styled-components/native';
import { StackScreenProps } from '@react-navigation/stack';
import { RootParamList } from '../../navigation/RootNavigation';
import { Container } from '../../components/shared';
import { colors } from '../../config/colors';
import AmountSection from '../../components/Balance/AmountSection';
import BalanceCardSection from '../../components/Balance/BalanceCardSection';
import ButtonSection from '../../components/Balance/ButtonSection';

export type Props = StackScreenProps<RootParamList, "Balance">

const BalanceContainer = styled(Container)`
    background-color: ${colors.graylight};
    width: 100%;
    padding: 25px;
    flex: 1;
`;

const Balance: FC<Props> = ({ route }) => {
    return (
        <BalanceContainer>
            <AmountSection balance={route?.params?.balance}/>
            <BalanceCardSection {...route?.params}/>
            <ButtonSection />
        </BalanceContainer>
    )
}

export default Balance;