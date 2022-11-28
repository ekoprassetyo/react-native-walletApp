import React, {FC} from 'react';
import styled from 'styled-components/native';
import {colors} from '../../config/colors';
import register from '../../assets/regisImage.png';

const RegisterDocumentBackground = styled.View`
    background-color = ${colors.graylight}
    width: 100%
    flex: 1;
    align-items: center;
`;

const TopImage = styled.Image`
  width: 100%;
  height: 100%;
  background-size: cover;
`;

const TopSection = styled.View`
  width: 100%;
  max-height: 100%;
  flex: 1;
`;

const RegisterDocumentUpload: FC = () => {
  return (
    <RegisterDocumentBackground>
      <TopSection>
        <TopImage source={register} />
      </TopSection>
    </RegisterDocumentBackground>
  );
};

export default RegisterDocumentUpload;
