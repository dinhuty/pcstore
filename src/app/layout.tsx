import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import { Box, Container, Divider, SpeedDial, Stack, ThemeProvider } from '@mui/material';
import theme from '@/theme';
import HeaderTop from '@/app/components/partials/HeaderTop/HeaderTop';
import Header from '@/app/components/partials/Header/Header';
import './globals.css';
import Footer from '@/app/components/partials/Footer/Footer';
import BottomFooter from '@/app/components/partials/Footer/BottomFooter';
import ActionUser from '@/app/components/common/ActionUser';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'PC Gaming',
  description: 'PC store gaming'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <Stack>
              <HeaderTop />
              <Header />
            </Stack>
            <Container>{children}</Container>
            <div
              className="footer"
              style={{
                padding: '20px 0',
                marginTop: '50px'
              }}
            >
              <Container>
                <Footer />
              </Container>
            </div>
            <div className="bottom-footer">
              <Divider />
              <BottomFooter />
            </div>
          </ThemeProvider>
          <ActionUser />
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
