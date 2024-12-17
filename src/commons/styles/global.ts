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
    font-size: 11px;
    font-family: 'NotoSansKR';
    color: #000;
    ${theme.media.screen2} {
      font-size: 9px;
    }
    ${theme.media.screen3} {
      font-size: 8px;
    }
  }
  input[readonly] {
    background: ${theme.colors.gray06};
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
    height: 6px;
  }

  /* 스크롤바 트랙 */
  ::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 10px;
  }

  /* 스크롤바 핸들 */
  ::-webkit-scrollbar-thumb {
    background: ${theme.colors.gray03};
    border-radius: 10px;
  }

  main {
    width: 70%;
    margin: 80px auto 60px;
    min-width: 920px;
    ${theme.media.screen1} {
      min-width: 720px;
    }
    ${theme.media.screen2} {
      min-width: 480px;
    }
    ${theme.media.screen3} {
      width: 84%;
      min-width: 370px;
    }
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
