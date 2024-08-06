import { css } from '@emotion/react'

export const globalStyles = css`
  * {
    margin: 0;
    padding: 0;
    border: none;
    outline: none;
    background: none;
    list-style: none;
    box-sizing: border-box;
    font-size: 10px;
    font-family: 'NotoSansKR';
    color: #000;
  }

  main {
    width: 62.5%;
    margin: 0 auto;
  }

  @font-face {
    font-family: 'NotoSansKR';
    src: url('/fonts/NotoSansKR-Bold.woff') format('woff');
    font-weight: bold;
    font-style: normal;
  }

  @font-face {
    font-family: 'NotoSansKR';
    src: url('/fonts/NotoSansKR-Medium.woff') format('woff');
    font-weight: 500;
    font-style: normal;
  }

  @font-face {
    font-family: 'NotoSansKR';
    src: url('/fonts/NotoSansKR-Regular.woff') format('woff');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'NotoSansKR';
    src: url('/fonts/NotoSansKR-Light.woff') format('woff');
    font-weight: 300;
    font-style: normal;
  }
`
