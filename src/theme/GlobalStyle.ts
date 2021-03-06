import { createGlobalStyle, css, DefaultTheme } from 'styled-components';

const respond = (breakpoints: DefaultTheme['Breakpoints']): string => {
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
    @media (min-width: ${breakpoints.md}) and (max-width: ${breakpoints.xxl}) {
      font-size: 62.5%;
      // 1rem = 10px; 10px/16px = 62.5%
    }
    // @media (min-width: ${breakpoints.lg}) and (max-width: ${breakpoints.xl}) {
    //   font-size: 62.5%;
    //   // 1rem = 10px; 10px/16px = 62.5%
    // }
		// @media (min-width: ${breakpoints.xl}) and (max-width: ${breakpoints.xxl}) {
    //   font-size: 62.5%;
    //   // 1rem = 10px; 10px/16px = 62.5%
    // }
    @media (min-width: ${breakpoints.xxl}) {
      font-size: 75%;
      /* 1rem = 12, 12/16 */ 
		}
	`;
};

const GlobalStyle = createGlobalStyle(
  ({ theme }) => css`
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

      ${respond(theme.Breakpoints)}
    }

    body {
      margin: 0;
      padding: 0;
      min-height: 100vh;
      font-size: ${theme.FontSize.md};
      font-weight: ${theme.Wights.normal};
      font-family: ${theme.Fonts.main};
      color: ${theme.Colors.grey60};
      position: relative;
    }

    #root {
      height: 100vh;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      color: ${theme.Colors.grey60};
      font-weight: ${theme.Wights.bold};
    }

    h1 {
      font-size: ${theme.FontSize.xxl};
      margin: 2rem 0;
    }

    h2 {
      font-size: ${theme.FontSize.xl};
      margin: 1.8rem 0;
    }

    h3 {
      font-size: ${theme.FontSize.lg};
      margin: 1.6rem 0;
    }

    h4 {
      font-size: ${theme.FontSize.md};
      margin: 1.4rem 0;
    }

    h5 {
      font-size: ${theme.FontSize.sm};
      margin: 1rem 0;
    }

    h6 {
      font-size: ${theme.FontSize.xs};
      margin: 0.6rem 0;
    }

    p {
      color: ${theme.Colors.grey60};
      font-size: ${theme.FontSize.md};
      font-weight: ${theme.Wights.normal};
      line-height: 1.5em;
      margin: 1rem 0;
    }

    a {
      color: ${theme.Colors.blue};
      text-decoration: none;
    }

    ul,
    ol {
      margin: 0;
      padding: 0;
      list-style: none;
    }

    img {
      max-width: 100%;
      height: auto;
    }

    input {
      font-size: 100%;
      line-height: 1.15;
    }
  `,
);

export default GlobalStyle;
