import { createGlobalStyle } from 'styled-components';
import '../assets/fonts/font.css';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Pretendard', sans-serif;
  }
`;

export default GlobalStyle;
