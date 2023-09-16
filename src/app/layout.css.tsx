import styled from 'styled-components';

import { THEME } from '@/styles';

const MAX_WIDTH = '1920px';

export const Container = styled.div`
  width: 100%;
  height: 100%;

  @media (max-width: ${MAX_WIDTH}) {
    display: flex;
    justify-content: center;
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  max-width: ${MAX_WIDTH};

  overflow: hidden;
  display: grid;

  @media ${THEME.SCREENS.XL} {
    grid-template-columns: 400px 1fr;
  }
  @media ${THEME.SCREENS.XL_MAX} {
    grid-template-columns: 100px 1fr;
  }
`;

export const MainSection = styled.main`
  width: 100%;
  height: fit-content;
  min-height: 100vh;
  max-height: 100vh;

  overflow-y: auto; // fallback
  overflow-y: overlay;
`;

export const SideSection = styled.aside`
  width: 100%;
  height: 100%;
  overflow: hidden;
`;
