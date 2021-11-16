import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  .material-icons {
    font-family: 'Material Icons';
    font-weight: normal;
    font-style: normal;
    font-size: 24px;  /* Preferred icon size */
    display: inline-block;
    line-height: 1;
    text-transform: none;
    letter-spacing: normal;
    word-wrap: normal;
    white-space: nowrap;
    direction: ltr;

    /* Support for all WebKit browsers. */
    -webkit-font-smoothing: antialiased;
    /* Support for Safari and Chrome. */
    text-rendering: optimizeLegibility;

    /* Support for Firefox. */
    -moz-osx-font-smoothing: grayscale;

    /* Support for IE. */
    font-feature-settings: 'liga';
  }
  html {
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    box-sizing: border-box;
    height: 100%;
    font-size: 62.5%;
    scroll-behavior: smooth;
    scroll-padding: 53px 0 0 0;
  }
  body {
    margin: 0;
    padding: 0;
    font-family: 'Syne', sans-serif;
    font-size: 1.6rem;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  *,
  :after,
  :before {
    box-sizing: border-box;
  }
  h1, h2, h3, h4, h5, h6, p, a {
    margin: 0;
    padding: 0;
    font-weight: inherit;
    font-style: inherit;
  }
`;

export default GlobalStyles;