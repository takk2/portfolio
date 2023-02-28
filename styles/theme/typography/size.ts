/*
  ==============================================================================
    (c) 2023. quantum universe All rights reserved.
    author : SEOLIN LEE
    start date : 1/3/2023
  ==============================================================================
*/
import { css } from "@emotion/react";
import weights from "./wights";

const headline = {
  hl1: css`
    font-size: 3.5rem;
    line-height: 4.375rem;
    ${weights.semibold}
  `,
  hl2: css`
    font-size: 3rem;
    line-height: 3.75rem;
    ${weights.semibold}
  `,
  hl3: css`
    font-size: 2.5rem;
    line-height: 3.125rem;
    ${weights.semibold}
  `,
};

const subHeadline = {
  sh1: css`
    font-size: 1.5rem;
    line-height: 2.125rem;
    ${weights.semibold}
  `,
  sh2: css`
    font-size: 1.125rem;
    line-height: 2rem;
    ${weights.semibold}
  `,
  sh3: css`
    font-size: 1rem;
    line-height: 1.75rem;
    ${weights.semibold}
  `,
  sh4: css`
    font-size: 0.875rem;
    line-height: 1.25rem;
    ${weights.semibold}
  `,
};

const parapraph = {
  p1: css`
    font-size: 1.75rem;
    line-height: 2.5rem;
    ${weights.regular}
  `,
  p2: css`
    font-size: 1.5rem;
    line-height: 2.25rem;
    ${weights.regular}
  `,
  p3: css`
    font-size: 1.125rem;
    line-height: 2rem;
    ${weights.regular}
  `,
  p4: css`
    font-size: 1rem;
    line-height: 1.75rem;
    ${weights.regular}
  `,
  p5: css`
    font-size: 0.875rem;
    line-height: 1.625rem;
    ${weights.regular}
  `,
};

const size = { headline, subHeadline, parapraph };

export default size;
