import {colors} from './../../../config/colors';
import styled from 'styled-components/native';

export const Container = styled.View`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

export const StyledTouchable = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
`;

export const ViewTextContainer = styled.Text`
  display: flex;
  flex-direction: row;
  height: 25px;
  justify-content: space-between;
  margin-end: 55px;
`;

export const TextStyled = styled.Text`
  color: white;
  font-weight: bold;
  font-size: 12;
`;

export const TextLabel = styled.Text`
    color: ${colors.smokeGrey};
    font-weight: bold;
    font-size: 12px,
    padding-end: 25;
`;
