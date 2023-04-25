import { css } from "@emotion/react";
import { palette } from "libs/palette";

export const reset = css`
  /* @font-face {
    font-family: 'EarlyFontDiary';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_220508@1.0/EarlyFontDiary.woff2')
      format('woff2');
    font-weight: normal;
    font-style: normal;
  } */
  @font-face {
    font-family: "nexongoth";
    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_two@1.0/NanumSquareRound.woff")
      format("woff");
    font-weight: normal;
    font-style: normal;
  }

  * {
    /* font-family: 'EarlyFontDiary'; 다이어리 페이지에서만  */
    font-family: "nexongoth";
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "nexongoth";
    line-height: 1.4;
  }

  ::-webkit-scrollbar {
    width: 5px;
  }
  ::-webkit-scrollbar-track {
    background-color: #f1f1f1;
  }
  ::-webkit-scrollbar-thumb {
    background-color: rgb(179, 179, 179);
    border-radius: 25px;
  }

  html {
    font-size: 16px;
  }

  body {
    font-size: 1rem;
    color: #000;
    background-color: ${palette.gray[0]};
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  ol,
  ul,
  li {
    list-style: none;
  }
`;
