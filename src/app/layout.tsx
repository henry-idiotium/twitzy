import { Container, MainSection, SideSection, Wrapper } from './layout.css';

import { Inter } from 'next/font/google';
import { Metadata } from 'next';

import { GlobalStyle } from '@/styles';
import { Sidebar } from '@/components';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Twitzy',
  description: 'Your social media hub for connecting and sharing.',
};

export default function RootLayout({ children }: React.PropsWithChildren) {
  return (
    <html lang="en">
      <GlobalStyle />

      <body className={inter.className}>
        <Container>
          <Wrapper>
            <SideSection>
              <Sidebar />
            </SideSection>

            <MainSection>
              <span>This is MAIN</span>
              {children}
            </MainSection>
          </Wrapper>
        </Container>
      </body>
    </html>
  );
}
