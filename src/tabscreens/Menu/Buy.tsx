import React, {FC} from 'react';
import styled from 'styled-components/native';
import { colors } from '../../config/colors';
import { Text } from 'react-native';

const BuyContainer = styled.ScrollView`
    flex: 1;
    background-color: ${colors.graylight};
`;

const Buy: FC = () => {
    return (
        <BuyContainer>
            <Text>
                Buy Page
            </Text>
        </BuyContainer>
    )
}

export default Buy;