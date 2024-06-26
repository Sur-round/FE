import { createGlobalStyle } from 'styled-components';
import '../assets/fonts/font.css';

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html, body {
    height: 100%;
    font-family: 'Pretendard', sans-serif;
    background-color: #fff;
    color: #000;
    line-height: 1.6;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  ul, ol {
    list-style: none;
  }

  button {
    border: none;
    background: none;
    cursor: pointer;
  }

  img {
    max-width: 100%;
    height: auto;
    display: block;
  }

  input, button, textarea, select {
    font-family: inherit;
    font-size: inherit;
  }
`;

export default GlobalStyle;
