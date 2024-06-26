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
};

const fonts = {
  heading1: css`
    font-family: 'Pretendard';
    font-weight: bold;
    color: ${colors.green5};
    font-size: 50px;
  `,
  heading1b: css`
    font-family: 'Pretendard';
    font-weight: 600;
    color: ${colors.green5};
    font-size: 55px;
  `,
  heading1c: css`
    font-family: 'Pretendard';
    font-weight: 600;
    color: ${colors.maingreen};
    font-size: 1.5rem;
  `,
  heading2: css`
    font-family: 'Pretendard';
    font-weight: bold;
    color: ${colors.green5};
    font-size: 36px;
  `,
  heading2b: css`
    font-family: 'Pretendard';
    font-weight: bold;
    color: ${colors.maingreen};
    font-size: 36px;
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
    font-weight: 500;
    color: ${colors.dark};
    font-size: 18.5px;
  `,
  body2: css`
    font-family: 'Pretendard';
    font-weight: 500;
    color: ${colors.dark};
    font-size: 16.5px;
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
};

const theme = {
  colors,
  fonts,
  mixin,
};

export default theme;
