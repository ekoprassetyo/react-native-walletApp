import React, {FC} from 'react';
import styled from 'styled-components/native';
import {ProfileProps} from './types';

const StyledView = styled.TouchableOpacity`
  flex-direction: column;
  width: 45px;
  height: 45px;
  border-radius: 15px;
`;

const StyledImage = styled.Image`
  width: 100%;
  height: 100%;
  border-radius: 15px;
  resize-mode: cover;
`;

const Profile: FC<ProfileProps> = ({
  image,
  imageContainerStyle,
  imageStyle,
  onPress,
}) => {
  return (
    <StyledView onPress={onPress} style={imageContainerStyle}>
      <StyledImage source={image} style={imageStyle} />
    </StyledView>
  );
};

export default Profile;
