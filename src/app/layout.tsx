import { ThemeProvider, GlobalStyle } from './(styles)';

import { Inter } from 'next/font/google';
import { Metadata } from 'next';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Twitzy',
  description: 'Your social media hub for connecting and sharing.',
};

export default function RootLayout({ children }: React.PropsWithChildren) {
  return (
    <html lang="en">
      <ThemeProvider>
        <GlobalStyle />
        <body className={inter.className}>{children}</body>
      </ThemeProvider>
    </html>
  );
}
