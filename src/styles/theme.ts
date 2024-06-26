import { css } from 'styled-components';
import mixin from './mixin';

const colors = {
  light: '#F6F6F6',
  mid: '#ECEDEB',
  dark: '#71736B',
  green1: '#D3D6B2',
  green2: '#04A264',
  subgreen: '#83C5BE',
  maingreen: '#006D77',
  green5: '#1F2C1D',
  white: '#FFFFFF',
  black: '#000000',
  lightgray: '#D3D3D3',
  darkgray: '#808080',
  blue1: '#CDE8FF',
  blue2: '#DFF3FF',
};

const fonts = {
  heading1: css`
    font-family: 'Pretendard';
    font-weight: 600;
    color: ${colors.black};
    font-size: 3.3rem;
  `,
  heading1b: css`
    font-family: 'Pretendard';
    font-weight: 600;
    color: ${colors.maingreen};
    font-size: 3.3rem;
  `,
  heading1c: css`
    font-family: 'Pretendard';
    font-weight: 600;
    color: ${colors.maingreen};
    font-size: 1.5rem;
  `,
  heading2: css`
    font-family: 'Pretendard';
    font-weight: 600;
    color: ${colors.black};
    font-size: 2.3rem;
  `,
  heading2b: css`
    font-family: 'Pretendard';
    font-weight: 600;
    color: ${colors.maingreen};
    font-size: 2.3rem;
  `,
  heading3: css`
    font-family: 'Pretendard';
    font-weight: bold;
    color: ${colors.green5};
    font-size: 24px;
  `,
  heading4: css`
    font-family: 'Pretendard';
    font-weight: bold;
    color: ${colors.green5};
    font-size: 20px;
  `,
  heading5: css`
    font-family: 'Pretendard';
    font-weight: bold;
    color: ${colors.subgreen};
    font-size: 18px;
  `,
  heading6: css`
    font-family: 'Pretendard';
    font-weight: 800;
    color: ${colors.subgreen};
    font-size: 14px;
  `,
  body: css`
    font-family: 'Pretendard';
    font-weight: 400;
    color: ${colors.darkgray};
    font-size: 1.2rem;
  `,
  body2: css`
    font-family: 'Pretendard';
    font-weight: bold;
    color: ${colors.subgreen};
    font-size: 1rem;
  `,
  body3: css`
    font-family: 'Pretendard';
    font-weight: 300;
    color: ${colors.subgreen};
    font-size: 1rem;
  `,
  body4: css`
    font-family: 'Pretendard';
    font-weight: 500;
    color: ${colors.white};
    font-size: 1rem;
  `,
  body5: css`
    font-family: 'Pretendard';
    font-weight: 600;
    color: ${colors.black};
    font-size: 1.6rem;
  `,
  body6: css`
    font-family: 'Pretendard';
    font-weight: 400;
    color: ${colors.darkgray};
    font-size: 1rem;
  `,
};

const theme = {
  colors,
  fonts,
  mixin,
};

export default theme;
