import { NextPage } from 'next';
import { DefaultSeo } from 'next-seo';
import { AppProps } from 'next/app';
import React from 'react';

import '../styles/globals.scss';
import Navbar from '../components/Navbar';
import SocialLinks from '../components/SocialLinks';
import SEO from '../config/seo';

const CustomApp: NextPage<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <DefaultSeo {...SEO} />
      <Navbar />
      <SocialLinks />
      <Component {...pageProps} />
    </>
  );
};

export default CustomApp;
