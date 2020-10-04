import Head from 'next/head';
import React from 'react';

const SEO: React.FC = () => {
  return (
    <Head>
      <title>Davi Ribeiro | Home</title>
      <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
      <meta httpEquiv="x-ua-compatible" content="IE=edge,chrome=1" />
      <meta name="description" content="Welcome to me little space" />
      <meta name="author" content="Davi Ribeiro | luminuszz" />
      <meta name="creator" content="Davi Ribeiro | luminuszz" />
      <meta name="revisit-after" content="1 day" />
      <meta
        name="keywords"
        content="luminuszz,dev,nodejs,react,react native, bulma, development, desenvolvedor, full, stack "
      />
      <meta name="MobileOptimized" content="320" />
      <meta name="HandheldFriendly" content="True" />
      <meta name="theme-color" content="#121214" />
      <meta name="msapplication-TileColor" content="#121214" />
      <meta name="referrer" content="no-referrer-when-downgrade" />
      <meta name="google" content="notranslate" />

      <meta property="og:title" content="Luminuszz" />
      <meta
        property="og:description"
        content="luminuszz.dev, Welcome  This is my little space | Bem vindo, Esse é o meu pequeno espaço,"
      />
      <meta property="og:locale" content="pt_BR" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="luminuszz" />
      <meta property="og:image" content="" />
      <meta property="og:image:secure_url" content="/profile.jpeg" />
      <meta property="og:image:alt" content="Thumbnail" />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      <meta name="twitter:title" content="luminuszz" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@luminuszz" />
      <meta name="twitter:creator" content="@luminuszz" />
      <meta name="twitter:image" content="/profile.jpeg" />
      <meta name="twitter:image:src" content="/profile.jpeg" />
      <meta name="twitter:image:alt" content="Thumbnail" />
      <meta name="twitter:image:width" content="1200" />
      <meta name="twitter:image:height" content="620" />
    </Head>
  );
};

export default SEO;
