import React, {FC} from 'react';
import styled from 'styled-components/native';
import {colors} from '../../../config/colors';
import register from '../../../assets/regisImage.png';

const VerificationPageBackground = styled.View`
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

const VerificationPage = () => {
  return (
    <VerificationPageBackground>
      <TopImage source={register} />
    </VerificationPageBackground>
  );
};

export default VerificationPage;
