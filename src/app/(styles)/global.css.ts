'use client';

import './reset.css';

import { cssVariables } from './themes.css';

import * as styled from 'styled-components';

export const GlobalStyle = styled.createGlobalStyle`
  ${cssVariables}
  * {
    border-color: hsl(var(--border));
  }
  body {
    background-color: hsl(var(--background));
    color: hsl(var(--foreground));
  }
`;
