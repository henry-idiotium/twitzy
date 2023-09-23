'use client';

import tw from 'twin.macro';
import styled from 'styled-components';

const MAX_WIDTH = '1920px';

export const Container = styled.div`
  ${tw`wh-full`}

  @media (max-width: ${MAX_WIDTH}) {
    display: flex;
    justify-content: center;
  }
`;

export const Wrapper = styled.div`
  ${tw`
    wh-full relative overflow-hidden grid
    xl:(grid-cols-[300px 1fr])
    xl-max:(grid-cols-[100px 1fr])
    sm-max:(grid-cols-[1fr])
  `}

  max-width: ${MAX_WIDTH};
`;

export const MainSection = tw.main`
  w-full h-fit min-h-full max-h-full
  overflow-auto overflow-overlay
`;

export const SideSection = tw.aside`wh-full overflow-hidden`;
