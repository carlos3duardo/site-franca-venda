import { AppProps } from 'next/app';
import Head from 'next/head';
import { ChakraProvider } from '@chakra-ui/react';

import theme from '../styles/themes/default';
import ViewBreakpoint from '../components/Layout/ViewBreakpoint';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <ChakraProvider theme={theme}>
      <Head>
        <title>Franca Venda</title>
      </Head>
      <Component {...pageProps} />
      <ViewBreakpoint />
    </ChakraProvider>
  );
}

export default MyApp;
