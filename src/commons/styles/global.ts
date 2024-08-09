import { css } from '@emotion/react'
import theme from './theme'

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
  /* 전역스타일 초기화로 ant modal 스타일 조정 */
  .ant-modal-root * {
    border: inherit;
    outline: inherit;
    list-style: inherit;
    font-size: inherit;
    font-family: inherit;
    color: currentColor;
    box-sizing: inherit;
  }
  .ant-btn-primary {
    color: white;
  }
  /* 전역스타일 초기화로 ant modal 스타일 조정 */

  /* 전체 스크롤바 */
  ::-webkit-scrollbar {
    width: 6px;
  }

  /* 스크롤바 트랙 */
  ::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 10px;
  }

  /* 스크롤바 핸들 */
  ::-webkit-scrollbar-thumb {
    background: ${theme.colors.main};
    border-radius: 10px;
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
