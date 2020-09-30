import { NextPage } from 'next';
import { NextSeo } from 'next-seo';
import I18nProvider from 'next-translate/I18nProvider';
import useTranslation from 'next-translate/useTranslation';
import { AppProps } from 'next/app';
import React from 'react';

import SEO from '../config/seo';
import '../styles/globals.scss';

const CustomApp: NextPage<AppProps> = ({ Component, pageProps }) => {
  const { lang } = useTranslation();
  return (
    <I18nProvider lang={lang}>
      <NextSeo {...SEO} />
      <Component {...pageProps} />
    </I18nProvider>
  );
};

export default CustomApp;
