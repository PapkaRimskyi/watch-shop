import { createGlobalStyle } from 'styled-components';
import { MAIN_COLOR, MARGIN_AUTO, MEDIA_SIZES } from './variables';

import '../../fonts/Roboto-Light.woff';
import '../../fonts/Roboto-Regular.woff';
import '../../fonts/Roboto-Bold.woff';

import '../../fonts/PlayfairDisplay-Bold.woff';
import '../../fonts/PlayfairDisplay-Regular.woff';

const GlobalStyles = createGlobalStyle`
    @font-face {
    font-family: 'Roboto';
    src: local('Roboto-Light'),
      url('fonts/Roboto-Light.woff') format('woff');
    font-weight: 300;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Roboto';
    src: local('Roboto-Regular'),
      url('fonts/Roboto-Regular.woff') format('woff');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Roboto';
    src: local('Roboto-Bold'),
      url('fonts/Roboto-Bold.woff') format('woff');
    font-weight: 700;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'PlayfairDisplay';
    src: local('PlayfairDisplay-Regular'),
      url('fonts/PlayfairDisplay-Regular.woff') format('woff');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'PlayfairDisplay';
    src: local('PlayfairDisplay-Bold'),
      url('fonts/PlayfairDisplay-Bold.woff') format('woff');
    font-weight: 700;
    font-style: normal;
    font-display: swap;
  }

  body {
    margin: 0;
    font-family: 'Roboto', 'PlayfairDisplay', sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: ${MAIN_COLOR};
  }

  * {
    box-sizing: border-box;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style-type: none;
  }

  ol {
    margin: 0;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  h1, h2, h3, p {
    margin: 0;
  }

  figure {
    margin: 0;
    padding: 0;
  }

  fieldset {
    margin: 0;
    padding: 0;
    border: none;
  }

  input {
    border: none;
    font: {
      family: inherit;
      size: inherit;
    }
    color: inherit;
    background-color: inherit;
  }

  button {
    padding: 0;
    font: {
      family: inherit;
      size: inherit;
    }
    border: none;
    background-color: transparent;
    cursor: pointer;

    &:disabled {
      cursor: not-allowed;
    }
  }

  #root {
    margin: ${MARGIN_AUTO};
    max-width: ${MEDIA_SIZES.largeDesktop}px;
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }
`;

export default GlobalStyles;
