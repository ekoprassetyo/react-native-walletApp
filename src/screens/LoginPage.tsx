import React, {FC} from 'react';
import styled from 'styled-components/native';
import { colors } from '../config/colors';
import { RootParamList } from '../navigation/RootNavigation';
import { StackScreenProps } from '@react-navigation/stack';
import FormLogin from '../components/Auth/FormLogin';


const LoginContainer = styled.View`
    background-color: ${colors.graylight};
    width: 100%;
    flex: 1;
`;

export type Props = StackScreenProps<RootParamList, 'LoginPage' >

const LoginPage: FC<Props> = () => {
    return(
        <LoginContainer>
            <FormLogin />
        </LoginContainer>
    )
}

export default LoginPage;