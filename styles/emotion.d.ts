/*
  ==============================================================================
    (c) 2023. quantum universe All rights reserved.
    author : SEOLIN LEE
    start date : 1/3/2023
  ==============================================================================
*/
import "@emotion/react";
import theme from "./theme";

type ThemeType = typeof theme;

declare module "@emotion/react" {
  export interface Theme extends ThemeType {}
}
