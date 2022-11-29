import {getWidth, getFontSize} from '../../lib/getSize';
import {colors} from '../../config/colors';
import {TextProps} from './types';

const textStyles = (props: TextProps) => {
  return `
    color:  ${props.color ? props.color : colors.graydark};
    font-size: 16px;
    line-height: ${
      props.lineHeight
        ? `${getFontSize(props.lineHeight)}`
        : `${getFontSize(16)}`
    };
    letter-spacing: ${props.letterSpacing ? props.letterSpacing : '0.2px'};
    background-color: transparent;
    ${props.size && `font-size: ${getFontSize(props.size)}`};
    ${props.center && `text-align: center`};
    ${props.right && `text-align: right`};
    ${props.left && `text-align: left`};
    ${props.marg && `margin: ${props.marg}`};
    ${props.pad && `padding: ${props.pad}`};
    ${props.wid && `width: ${getWidth(props.wid)}`};
    ${props.spacing && `letter-spacing: ${props.spacing}`};
    ${props.textTransform && `text-transform: ${props.textTransform}`};
    ${
      props.textDecorationLine &&
      `text-decoration-line: ${props.textDecorationLine}`
    };
  `;
};
export default textStyles;
