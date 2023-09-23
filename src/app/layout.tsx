import { Container, MainSection, SideSection, Wrapper } from './layout.css';

import { cookies } from 'next/headers';
import { Metadata } from 'next';

import { GlobalStyles } from '@/styles';
import { appStore } from '@/stores';
import { FontAwesomeWrapper } from '@/lib/fontawesome';
import { JotaiProvider, StyledComponentsRegistry } from '@/lib';
import { ThemeProvider } from '@/components/theme-provider';
import { Sidebar } from '@/components/sidebar';

export const metadata: Metadata = {
  title: 'Twitzy',
  description: 'Your social media hub for connecting and sharing.',
  icons: { icon: '/favicon.ico' },
};

export default function RootLayout({ children }: React.PropsWithChildren) {
  return (
    <html suppressHydrationWarning lang="en">
      <Body>
        <StyledComponentsRegistry>
          <GlobalStyles />

          <JotaiProvider store={appStore}>
            <ThemeProvider>
              <FontAwesomeWrapper>
                <Container>
                  <Wrapper>
                    <SideSection>
                      <Sidebar />
                    </SideSection>

                    <MainSection>{children}</MainSection>
                  </Wrapper>
                </Container>
              </FontAwesomeWrapper>
            </ThemeProvider>
          </JotaiProvider>
        </StyledComponentsRegistry>
      </Body>
    </html>
  );
}

/** Set dark mode before via cookie on page request. */
function Body({ children }: React.PropsWithChildren) {
  const DARK_MODE_KEY = process.env.DARK_MODE_COOKIE_KEY;
  const DARK_MODE_ATTR_NAME = process.env.NEXT_PUBLIC_THEME_ATTR_KEY;

  const props: GenericDict = {};
  const cookieStore = cookies();

  if (DARK_MODE_ATTR_NAME && cookieStore.has(DARK_MODE_KEY)) {
    const isDark = cookieStore.get(DARK_MODE_KEY)?.value === 'true';
    props[DARK_MODE_ATTR_NAME] = isDark ? 'dark' : 'light';
  }

  return <body {...props}>{children}</body>;
}
