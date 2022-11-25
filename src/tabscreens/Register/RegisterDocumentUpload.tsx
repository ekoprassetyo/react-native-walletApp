import React, {FC} from 'react';
import styled from 'styled-components/native';
import { colors } from '../../config/colors';
import { Text } from 'react-native';


const RegisterDocumentBackground = styled.View`
    background-color = ${colors.graylight}
    width: 100%
    flex: 1;
    align-items: center;
`;


const RegisterDocumentUpload: FC = () => {
    return(
        <RegisterDocumentBackground>
            <Text>
                Upload Document Page
            </Text>
        </RegisterDocumentBackground>

    )
}

export default RegisterDocumentUpload;