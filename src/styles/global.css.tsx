'use client';

import './reset.css';

import { themeCSSVarStr } from './theme.css';

import tw, { GlobalStyles as BaseStyles } from 'twin.macro';
import * as styled from 'styled-components';

const CustomStyles = styled.createGlobalStyle`
  ${themeCSSVarStr};

  body {
    ${tw`
      wh-full box-border bg-background text-foreground
      overflow-hidden
    `};
  }

  * {
    ${tw`border-border`};
  }
`;

export const GlobalStyles = () => (
  <>
    <BaseStyles />
    <CustomStyles />
  </>
);
