import React, {FC, useState} from 'react';
import styled from 'styled-components/native';
import register from '../../assets/regisImage.png';
import { colors } from '../../config/colors';
import BigText from '../../components/Texts/BigText';
import RegularButton from '../../components/Buttons/RegularButton';

const RegisterPageBackground = styled.View`
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

const RegisterPage: FC = () => {
  const [fullname, setFullname] = useState<String | null>(null);
  const [email, setEmail] = useState<String | null>(null);
  const [password, setPassword] = useState<String | null>(null);

  const handleChangeFullname = (fullname: string) => {
    setFullname(fullname);
  };

  const handleChangeEmail = (email: string) => {
    setEmail(email);
  };

  const handleChangePassword = (password: string) => {
    setPassword(password);
  };

  console.log(email, 'email');
  console.log(password, 'password');
  console.log(fullname, 'fullname');

  return (
    <RegisterPageBackground>
      <TopSection>
        <TopImage source={register} />
        <BigText textStyles={{color: colors.graydark, marginLeft: 10}}>
          {' '}
          Register{' '}
        </BigText>
        <InputText placeholder="Fullname" onChangeText={handleChangeFullname} />
        <InputText placeholder="Email" onChangeText={handleChangeEmail} />
        <InputText
          placeholder="Password"
          onChangeText={handleChangePassword}
          secureTextEntry
        />
      </TopSection>
      <BottomSection>
        <RegularButton
          btnStyle={{marginTop: 120, backgroundColor: colors.tertiary}}
          textStyle={{fontWeight: 'bold', color: colors.white}}
          onPress={() => {}}>
          Register
        </RegularButton>
      </BottomSection>
    </RegisterPageBackground>
  );
};

export default RegisterPage;
