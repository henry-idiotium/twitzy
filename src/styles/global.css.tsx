'use client';

import { GlobalStyles as BaseStyles } from 'twin.macro';
import * as styled from 'styled-components';
import './reset.css';

export const THEME_ATTR_NAME = 'data-theme';

// export const GlobalStyle = styled.createGlobalStyle`
//   :root {
//     &:not([${THEME_ATTR_NAME}='dark']) {
//       ${cssVariables.root};
//     }

//     &[${THEME_ATTR_NAME}='dark'] {
//       ${cssVariables.dark};
//     }
//   }

//   body {
//     width: 100%;
//     height: 100%;
//     background-color: hsl(${THEME.COLORS.BACKGROUND});
//     color: hsl(${THEME.COLORS.FOREGROUND});

//     box-sizing: border-box;
//     overflow: hidden;
//   }

//   * {
//     border-color: hsl(${THEME.COLORS.BORDER});
//   }
// `;

const CustomStyles = styled.createGlobalStyle`
  body {
    width: 100%;
    height: 100%;

    box-sizing: border-box;
    overflow: hidden;
  }
`;

export function GlobalStyles() {
  return (
    <>
      <BaseStyles />
      <CustomStyles />
    </>
  );
}
