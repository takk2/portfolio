import { css } from "@emotion/react";

const globals = css`
  @import url("https://webfontworld.github.io/pretendard/Pretendard.css");

  @media all and (min-width: 1024px) {
    html {
      font-size: 16px;
    }
  }
  @media all and (max-width: 969px) {
    html {
      font-size: 14px;
    }
  }
  @media all and (max-width: 767px) {
    html {
      font-size: 13px;
    }
  }

  * {
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;


   ::-webkit-scrollbar {
      display: none; /* Chrome, Safari, Opera*/
   
  
  }

  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video,
  button {
    margin: 0;
    padding: 0;
    border: 0;
    // project 별로 폰트 변경해주세요 //
    font-family: "Pretendard", sans-serif;
    //========================= //
    font-weight: normal;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
    display: block;
  }
  ol,
  ul {
    list-style: none;
  }
  blockquote,
  q {
    quotes: none;
  }
  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
    content: "";
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  button {
    background: none;
    outline: none;
    cursor: pointer;
  }

  .inner {
    width: 1480px;
    padding: 165px 20px 100px;
    margin: 0 auto;
  }
`;

export default globals;
