import React, {FC} from 'react';
import styled from 'styled-components/native';
import { colors } from '../../../config/colors';
import { Text } from 'react-native';

const BalAndPosContainer = styled.ScrollView`
    flex: 1;
    background-color: ${colors.graylight};
`;

const BalAndPos: FC = () => {
    return (
        <BalAndPosContainer>
            <Text>
                BalAndPos Page
            </Text>
        </BalAndPosContainer>
    )
}

export default BalAndPos;