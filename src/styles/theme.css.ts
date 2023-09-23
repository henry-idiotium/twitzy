import { colorCSSVarStr, radiusCSSVarStr } from './variables';

import { css } from 'twin.macro';

const TARGET = process.env.NEXT_PUBLIC_THEME_TARGET_ELEMENT;
const ATTR_NAME = process.env.NEXT_PUBLIC_THEME_ATTR_KEY;

export const themeCSSVarStr = css`
  ${TARGET} {
    ${colorCSSVarStr.root};
    ${radiusCSSVarStr}

    &[${ATTR_NAME}='dark'] {
      ${colorCSSVarStr.dark};
    }
  }
`;
