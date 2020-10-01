import { NextPage } from 'next';
import I18nProvider from 'next-translate/I18nProvider';
import useTranslation from 'next-translate/useTranslation';
import { AppProps } from 'next/app';
import React from 'react';

import { SEO } from '../components';
import '../styles/globals.scss';

const CustomApp: NextPage<AppProps> = ({ Component, pageProps }) => {
  const { lang } = useTranslation();
  return (
    <I18nProvider lang={lang}>
      <SEO />
      <Component {...pageProps} />
    </I18nProvider>
  );
};

export default CustomApp;
