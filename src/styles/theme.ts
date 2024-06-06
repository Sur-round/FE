import { css } from 'styled-components';

const colors = {
  light: '#F6F6F6',
  mid: '#ECEDEB',
  dark: '#71736B',
  green1: '#D3D6B2',
  green2: '#04A264',
  subgreen: '#83C5BE',
  maingreen: '#006D77',
  green5: '#1F2C1D',
};

const fonts = {
  heading1: css`
    font-family: 'Pretendard';
    font-weight: bold;
    font-style: italic;
    color: ${colors.green5};
    font-size: 50px;
  `,
  heading1b: css`
    font-family: 'Pretendard';
    font-weight: 600;
    font-style: italic;
    color: ${colors.green5};
    font-size: 55px;
  `,
  heading1c: css`
    font-family: 'Pretendard';
    font-weight: 600;
    font-style: italic;
    color: ${colors.maingreen};
    font-size: 55px;
  `,
  heading2: css`
    font-family: 'Pretendard';
    font-weight: bold;
    font-style: italic;
    color: ${colors.green5};
    font-size: 36px;
  `,
  heading2b: css`
    font-family: 'Pretendard';
    font-weight: bold;
    font-style: italic;
    color: ${colors.maingreen};
    font-size: 36px;
  `,
  heading3: css`
    font-family: 'Pretendard';
    font-weight: bold;
    font-style: italic;
    color: ${colors.green5};
    font-size: 24px;
  `,
  heading4: css`
    font-family: 'Pretendard';
    font-weight: bold;
    font-style: italic;
    color: ${colors.green5};
    font-size: 20px;
  `,
  heading5: css`
    font-family: 'Pretendard';
    font-weight: bold;
    font-style: italic;
    color: ${colors.subgreen};
    font-size: 18px;
  `,
  heading6: css`
    font-family: 'Pretendard';
    font-weight: 800;
    font-style: italic;
    color: ${colors.subgreen};
    font-size: 14px;
  `,
  body: css`
    font-family: 'Pretendard';
    font-weight: 500;
    font-style: italic;
    color: ${colors.dark};
    font-size: 18.5px;
  `,
  body2: css`
    font-family: 'Pretendard';
    font-weight: 500;
    font-style: italic;
    color: ${colors.dark};
    font-size: 16.5px;
  `,
};

const theme = {
  colors,
  fonts,
};

export default theme;
