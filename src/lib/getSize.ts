import {
  widthPercentageToDP,
  heightPercentageToDP,
} from 'react-native-responsive-screen';
import {RFValue} from 'react-native-responsive-fontsize';

const removePx = (size: number | string) => {
  let tempSize = size.toString();
  if (typeof size === 'string' && tempSize.includes('px')) {
    tempSize = tempSize.replace('px', '');
  }

  return tempSize;
};

const getWidth = (width: number | string) => {
  return `${widthPercentageToDP(removePx(width))}px`;
};

const getHeight = (height: number | string) => {
  return `${heightPercentageToDP(removePx(height))}px`;
};

const getFontSize = (size: number | string) => {
  return `${RFValue(Number(removePx(size)))}px`;
};

export {getWidth, getHeight, getFontSize};
