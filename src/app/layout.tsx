import styles from './page.module.css';
import './globals.css';
import ReactQueryProvider from './(providers)';

import Image from 'next/image';
import { Inter } from 'next/font/google';
import { Metadata } from 'next';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }: React.PropsWithChildren) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReactQueryProvider>
          <main className={styles.main}>
            <div className={styles.description}>
              <p>
                Get started by editing&nbsp;
                <code className={styles.code}>app/page.tsx</code>
              </p>
              <div>
                <a
                  href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  By{' '}
                  <Image
                    priority
                    src="/vercel.svg"
                    alt="Vercel Logo"
                    className={styles.vercelLogo}
                    width={100}
                    height={24}
                  />
                </a>
              </div>
            </div>

            <div className={styles.center}>{children}</div>

            <div className={styles.grid}></div>
          </main>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
