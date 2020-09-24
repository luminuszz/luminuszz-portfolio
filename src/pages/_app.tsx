import { NextPage } from 'next';
import { NextSeo } from 'next-seo';
import { AppProps } from 'next/app';
import React from 'react';

import '../styles/globals.scss';

import { Navbar, SocialLinks } from '../components';
import SEO from '../config/seo';

const CustomApp: NextPage<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <NextSeo {...SEO} />
      <Navbar />
      <SocialLinks />
      <Component {...pageProps} />
    </>
  );
};

export default CustomApp;
