import React, {FC} from 'react';
import styled from 'styled-components/native';
import { colors } from '../../config/colors';
import { Text } from 'react-native';

const QuotesContainer = styled.ScrollView`
    flex: 1;
    background-color: ${colors.graylight};
`;

const Quotes: FC = () => {
    return (
        <QuotesContainer>
            <Text>
                Quotes Page
            </Text>
        </QuotesContainer>
    )
}

export default Quotes;