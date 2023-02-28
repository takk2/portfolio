/*
  ==============================================================================
    (c) 2023. quantum universe All rights reserved.
    author : SEOLIN LEE
    start date : 1/3/2023
  ==============================================================================
*/
const mediaQueryPx = {
  oculus: "505px",
  mobile: "475px",
  tablet: "767px",
  laptop: "1024px",
  desktop: "1240px",
  landscape: "(orientation : landscape)",
  portrait: "(orientation : portrait)",
};

const mediaQuery = {
  oculus: `(max-height: ${mediaQueryPx.oculus})`,
  mobile: `(max-width: ${mediaQueryPx.mobile})`,
  tablet: `(max-width: ${mediaQueryPx.tablet})`,
  laptop: `(max-width: ${mediaQueryPx.laptop})`,
  desktop: `(max-width: ${mediaQueryPx.desktop})`,
  landscape: `${mediaQueryPx.landscape}`,
  portrait: `${mediaQueryPx.portrait}`,
};

export default mediaQuery;
