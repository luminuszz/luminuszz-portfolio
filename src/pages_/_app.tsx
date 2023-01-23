import { ChakraProvider, Flex } from '@chakra-ui/react';
import { NextPage } from 'next';
import I18nProvider from 'next-translate/I18nProvider';
import useTranslation from 'next-translate/useTranslation';
import { AppProps } from 'next/app';
import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

import { SEO } from '../components';
import { gradientCss } from '../styles/cssGraidentScript';
import { theme } from '../styles/theme';

const Layout: React.FC = ({ children }) => {
  console.log('tes');
  return (
    <Flex bg="black" css={gradientCss}>
      {children}
    </Flex>
  );
};

const CustomApp: NextPage<AppProps> = ({ Component, pageProps }) => {
  const { lang } = useTranslation();

  const queryClient = new QueryClient();

  return (
    <I18nProvider lang={lang}>
      <ChakraProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          <SEO />

          <Layout>
            <Component {...pageProps} />
          </Layout>
        </QueryClientProvider>
      </ChakraProvider>
    </I18nProvider>
  );
};

export default CustomApp;
