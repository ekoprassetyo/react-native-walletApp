import React, {FC, useState} from 'react';
import styled from 'styled-components/native';
import {colors} from '../config/colors';
import login from '../assets/loginImage.png';
import RegularButton from '../components/Buttons/RegularButton';
import SmallText from '../components/Texts/SmallText';
import {useNavigation} from '@react-navigation/native';
import { Props as HomeProps} from '../screens/Home';
import {TouchableOpacity} from 'react-native-gesture-handler';
import BigText from '../components/Texts/BigText';
import Icon from 'react-native-vector-icons/FontAwesome';

const LoginPageBackground = styled.View`
    background-color: ${colors.graylight}
    width: 100%;
    flex: 1;
    justify-content: center;
`;

const TopImage = styled.Image`
  width: 100%;
  height: 100%;
  background-size: cover;
`;

const InputText = styled.TextInput`
  border-color: ${colors.tertiary};
  height: 40px;
  margin: 15px;
  border-width: 1px;
  padding: 10px;
  border-radius: 15px;
`;

const TopSection = styled.View`
  width: 100%;
  max-height: 100%;
  flex: 1;
`;

const BottomSection = styled.View`
  width: 100%;
  margin-top: 130px;
  padding: 25px;
  flex: 1;
`;

const ContactSection = styled.View`
  width: 100%;
  flex: 3;
  min-height: 100%;
  flex-direction: row;
  margin-top: 10px;
  align-items: flex-start;
`;

const LoginPage: FC = () => {
  const [username, setUsername] = useState<String | null>(null);
  const [password, setPassword] = useState<String | null>(null);

  const handleChangeUsername = (username: string) => {
    setUsername(username);
  };

  const handleChangePassword = (password: string) => {
    setPassword(password);
  };

  const navigation = useNavigation<HomeProps['navigation']>();

  const handlePressHome = () => {
    navigation.navigate('Home');
  };

  console.log(username, 'username');
  console.log(password, 'password');

  return (
    <LoginPageBackground>
      <TopSection>
        <TopImage source={login} />
        <BigText textStyle={{color: colors.graydark, marginLeft: 10}}>
          {' '}
          Login{' '}
        </BigText>
        <InputText placeholder="Username" onChangeText={handleChangeUsername} />
        <InputText
          placeholder="Password"
          onChangeText={handleChangePassword}
          secureTextEntry
        />
      </TopSection>
      <BottomSection>
        <RegularButton
          btnStyle={{marginTop: 50, backgroundColor: colors.tertiary}}
          textStyle={{fontWeight: 'bold', color: colors.white}}
          onPress={handlePressHome}>
          Login
        </RegularButton>
        <TouchableOpacity onPress={() => navigation.navigate('RegisterPage')}>
          <SmallText
            textStyle={{marginLeft: 15, marginTop: 5, color: colors.primary}}>
            Don't have an account ? Click Here for Register Online
          </SmallText>
        </TouchableOpacity>
        <SmallText textStyle={{marginTop: 50, color: colors.graydark}}>
          {' '}
          Follow our social media for updates{' '}
        </SmallText>
        <ContactSection>
          <TouchableOpacity>
            <Icon
              name="instagram"
              size={40}
              color={colors.tertiary}
              style={{marginEnd: 10}}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon
              name="facebook"
              size={40}
              color={colors.tertiary}
              style={{marginEnd: 10}}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon
              name="whatsapp"
              size={40}
              color={colors.tertiary}
              style={{marginEnd: 10}}
            />
          </TouchableOpacity>
        </ContactSection>
      </BottomSection>
    </LoginPageBackground>
  );
};

export default LoginPage;
