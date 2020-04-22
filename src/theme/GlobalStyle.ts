import { createGlobalStyle, css } from 'styled-components';
import { StyleTheme } from './mainTheme';

const respond = (breakpoints: StyleTheme['breakpoints']): string => {
  return `
    @media (max-width: ${breakpoints.xs}) {
      font-size: 43.75%;
      // 1rem = 7px, 7/16 = 43.75%
    }
    @media (min-width: ${breakpoints.xs}) and (max-width: ${breakpoints.sm}) {
      font-size: 50%;
      // 1rem = 8px, 8/16 = 50%
    }
    @media (min-width: ${breakpoints.sm}) and (max-width: ${breakpoints.md}) {
      font-size: 56.25%;
      // 1rem = 9px, 9/16 = 50%
    }
    @media (min-width: ${breakpoints.md}) and (max-width: ${breakpoints.lg}) {
      font-size: 62.5%;
      // 1rem = 10px; 10px/16px = 62.5%
    }
    @media (min-width: ${breakpoints.lg}) and (max-width: ${breakpoints.xl}) {
      font-size: 62.5%;
      // 1rem = 10px; 10px/16px = 62.5%
    }
		@media (min-width: ${breakpoints.xl}) {
      font-size: 75%;
      /* 1rem = 12, 12/16 */ 
		}
	`;
};

const GlobalStyle = createGlobalStyle(
  ({ theme }: { theme: StyleTheme }) => css`
    @import url('https://fonts.googleapis.com/css?family=Montserrat:300,600&display=swap');
    *,
    *::before,
    *::after {
      box-sizing: inherit;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    html {
      box-sizing: border-box;
      font-size: 62.5%;

      ${respond(theme.breakpoints)}
    }

    body {
      margin: 0;
      padding: 0;
      font-size: 1.6rem;
      font-family: 'Montserrat', sans-serif;
    }

    img {
      max-width: 100%;
      height: auto;
    }
  `,
);

export default GlobalStyle;
