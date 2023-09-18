import { Inter } from 'next/font/google';
import { Metadata } from 'next';
import { GlobalStyles } from '@/styles';
import { StyledComponentsRegistry } from '@/lib/styled-component/registry';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Twitzy',
  description: 'Your social media hub for connecting and sharing.',
};

export default function RootLayout({ children }: React.PropsWithChildren) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StyledComponentsRegistry>
          <GlobalStyles />
          {children}

          {/* <Container>
          <Wrapper>
            <SideSection>
              <Sidebar />
            </SideSection>

            <MainSection>
              <span>This is MAIN</span>
              {children}
            </MainSection>
          </Wrapper>
        </Container> */}
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
