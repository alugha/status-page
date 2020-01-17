// @ts-ignore
import normalize from 'normalize.css';
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  ${normalize}

  html {
    box-sizing: border-box;
    background: linear-gradient(rgb(255, 255, 255), rgb(225, 231, 233));
    min-height: 100vh;
    color: #333;
    /* System font stack */
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Fira Sans", "Droid Sans", "Helvetica Neue", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  }

  *,
  ::before,
  ::after {
    box-sizing: inherit;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;

export const theme = {
  white: '#111',
  fadedWhite: '#333',
  yellow: '#F59300',
  green: '#30d158',
  transparentWhite: 'rgba(255, 255, 255, 0.2)',
  darkWhite: 'rgba(255, 255, 255, 0.6)',
  black: '#fefefe',
};
