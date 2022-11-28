import React, {FC} from 'react';
import { useNavigation } from '@react-navigation/native';
import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';
import { colors } from '../../config/colors';
import Icon from 'react-native-vector-icons/FontAwesome'

const ContainerBackButton = styled(RectButton)`
    width: ${RFValue(40)}px;
    height: ${RFValue(40)}px;
    background-color: ${colors.graydark};
    border-radius: 10px

    align-items: center;
    justify-content:  center;
`;

const IconBackButton = styled(Icon)`
    color: ${colors.graydark}
`;

export const BackButton: FC = () => {
    const navigation = useNavigation();

    const handleBack = () => {
        navigation.goBack();
    }

    return(
        <ContainerBackButton
        onPress={handleBack}
        style={{
            shadowColor: '#000',
            shadowOffset: {
                width: 0,
                height: 3,
            },
            shadowOpacity: 0.27,
            shadowRadius: 4.65,

            elevation: 6,
        }}>
            <IconBackButton name='chevron-left' size={15}/>
        </ContainerBackButton>
    )
}
