import React, {FC} from 'react';
import styled from 'styled-components/native';
import RegularButton from '../Buttons/RegularButton';
import { colors } from '../../config/colors';
import Icon from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native';
import { Props as BalanceProps } from '../../screens/stackscreens/Balance';


const ButtonSectionBackground = styled.View`
    width: 100%;
    align-items: center;
    flex: 1;
`;

const ButtonSection: FC = () => {
    const navigation = useNavigation<BalanceProps["navigation"]>();

    return (
        <ButtonSectionBackground>
            <RegularButton btnStyle={{ width: "50%"}} onPress={() => navigation.goBack()}>
                Cancel <Icon name="card" size={20} color={colors.white} />
            </RegularButton>
        </ButtonSectionBackground>
    )
}

export default ButtonSection;