import styles from './layout.module.scss';

import { Metadata } from 'next';

import { ThemeProvider } from '@/styles/theme-provider';
import { appStore } from '@/stores';
import { JotaiProvider } from '@/lib';
import { Sidebar } from '@/components/sidebar/sidebar';
import { Body } from '@/components/body';

export const metadata: Metadata = {
  title: 'Twitzy',
  description: 'Social media hub for connecting and sharing.',
  icons: { icon: '/favicon.ico' },
};

export default function RootLayout({ children }: React.PropsWithChildren) {
  return (
    <html suppressHydrationWarning lang="en">
      <Body>
        <ThemeProvider>
          <JotaiProvider store={appStore}>
            <div className={styles.container}>
              <div className={styles.wrapper}>
                <div className={styles.sideSection}>
                  <Sidebar />
                </div>

                <div className={styles.mainSection}>{children}</div>
              </div>
            </div>
          </JotaiProvider>
        </ThemeProvider>
      </Body>
    </html>
  );
}
