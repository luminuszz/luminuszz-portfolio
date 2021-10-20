import { ChakraProvider, Flex } from '@chakra-ui/react';
import { NextPage } from 'next';
import I18nProvider from 'next-translate/I18nProvider';
import useTranslation from 'next-translate/useTranslation';
import { AppProps } from 'next/app';
import React from 'react';

import { SEO } from '../components';
import { theme } from '../styles/theme';
import { gradientCss } from '../styles/cssGraidentScript';

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
  return (
    <I18nProvider lang={lang}>
      <ChakraProvider theme={theme}>
        <SEO />

        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </I18nProvider>
  );
};

export default CustomApp;
