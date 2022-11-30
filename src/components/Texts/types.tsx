import {ReactNode} from 'react';
import {StyleProp, TextStyle, GestureResponderEvent} from 'react-native';

export interface TextProps {
  color?: string;
  lineHeight?: string;
  letterSpacing?: string;
  size?: string;
  center?: string;
  right?: string;
  left?: string;
  marg?: string;
  pad?: string;
  wid?: string;
  spacing?: string;
  textTransform?: string;
  textDecorationLine?: string;
  textStyles?: StyleProp<TextStyle>;
  children?: ReactNode;
}

export interface FontProps {
  weight?: number;
  isBold?: boolean;
}

export interface StyledTextProps extends TextProps {
  font: string;
}

export interface MyTextProps extends TextProps {
  bold?: boolean;
  weight?: string;
  onClick?: (event: GestureResponderEvent) => void | undefined;
  children: ReactNode;
}

export const getFont = ({weight, isBold}: FontProps) => {
  // get font type
  const type = 'Quicksand-';

  // switch between weights
  let font = type;
  switch (true) {
    case isBold:
      font = `${type}Bold`;
      break;

    case weight && weight < 400:
      font = `${type}Light`;
      break;

    case weight === 400:
      font = `${type}Regular`;
      break;

    case weight && weight < 700:
      font = `${type}SemiBold`;
      break;

    default:
      font = `${type}Regular`;
  }

  return font;
};
