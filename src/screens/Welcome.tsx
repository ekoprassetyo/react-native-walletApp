import React, {FC} from 'react';
import styled from 'styled-components/native';
import {Container} from '../components/shared';
import {colors} from '../config/colors';
import BigText from '../components/Texts/BigText';

import background from '../assets/bgs/background_v1.png';
import RegularText from '../components/Texts/RegularText';
import RegularButton from '../components/Buttons/RegularButton';
import { StackScreenProps } from '@react-navigation/stack';
import { RootParamList } from '../navigation/RootNavigation';

type Props = StackScreenProps<RootParamList, 'Welcome'>;

const WelcomeContainer = styled(Container)`
  background-color: ${colors.secondary};
  position: relative;
  justify-content: space-between;
  width: 100%;
  height: 100%;
`;

const TopImage = styled.Image`
  width: 100%;
  height: 100%;
  resize-mode: stretch;
  background-size: cover;
`;

const TopSection = styled.View`
  width: 100%;
  max-height: 50%;
  flex: 1;
`;

const BottomSection = styled.View`
  width: 100%;
  padding: 25px;
  flex: 1;
`;

const Welcome: FC<Props> = ({ navigation }) => {
  return (
    <WelcomeContainer>
      <TopSection>
        <TopImage source={background} />
      </TopSection>
      <BottomSection>
        <BigText textStyle={{marginBottom: 25, width: '70%'}}>
          Best way to track your money.
        </BigText>
        <RegularText textStyle={{marginBottom: 50, width: '100%'}}>
          We help you to manage your money and track your expenses.
        </RegularText>
        <RegularButton onPress={() => navigation.navigate("Home")} textStyle={{fontWeight: 'bold'}}>
          Get Started
        </RegularButton>
      </BottomSection>
    </WelcomeContainer>
  );
};

export default Welcome;
