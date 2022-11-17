import { GetServerSidePropsContext } from 'next';
import { useState } from 'react';
import { AppProps } from 'next/app';
import { getCookie, setCookie } from 'cookies-next';

import { ThemeProvider } from 'next-themes';
import { MantineProvider, ColorScheme, ColorSchemeProvider, Container } from '@mantine/core';
import { NotificationsProvider } from '@mantine/notifications';
import { Head } from '@components/common/Head';
import { Header } from '@components/Header';
import { Footer } from '@components/Footer';
import '@styles/index.css';
import '@styles/globals.css';

export default function App(props: AppProps & { colorScheme: ColorScheme }) {
  const { Component, pageProps } = props;
  const [colorScheme, setColorScheme] = useState<ColorScheme>(props.colorScheme);

  const toggleColorScheme = (value?: ColorScheme) => {
    const nextColorScheme = value || (colorScheme === 'dark' ? 'light' : 'dark');
    setColorScheme(nextColorScheme);
    setCookie('mantine-color-scheme', nextColorScheme, { maxAge: 60 * 60 * 24 * 30 });
  };

  return (
    <>
      <Head />
      <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
        <MantineProvider theme={{ colorScheme: 'dark' }} withGlobalStyles withNormalizeCSS>
          <NotificationsProvider>
            <Header />
            <Container>
              <ThemeProvider attribute="class">
                <Component {...pageProps} />
                <Footer />
              </ThemeProvider>
            </Container>
          </NotificationsProvider>
        </MantineProvider>
      </ColorSchemeProvider>
    </>
  );
}

App.getInitialProps = ({ ctx }: { ctx: GetServerSidePropsContext }) => ({
  colorScheme: getCookie('mantine-color-scheme', ctx) || 'light',
});
