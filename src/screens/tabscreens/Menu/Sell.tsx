import React, {FC} from 'react';
import styled from 'styled-components/native';
import { colors } from '../../../config/colors';
import { Text } from 'react-native';

const SellContainer = styled.ScrollView`
    flex: 1;
    background-color: ${colors.graylight};
`;

const Sell: FC = () => {
    return (
        <SellContainer>
            <Text>
                Sell Page
            </Text>
        </SellContainer>
    )
}

export default Sell;