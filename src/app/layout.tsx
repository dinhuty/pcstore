import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import { Container, Stack, ThemeProvider } from '@mui/material';
import theme from '@/theme';
import HeaderTop from '@/app/components/partials/HeaderTop/HeaderTop';
import Header from '@/app/components/partials/Header/Header';
import './globals.css';

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
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
