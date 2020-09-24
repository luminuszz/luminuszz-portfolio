import { DefaultSeoProps } from 'next-seo';

const SEO: DefaultSeoProps = {
  title: 'Davi Ribeiro | luminuszz',

  description:
    'luminuszz.dev, Welcome  This is my little space | Bem vindo, Esse é o meu pequeno espaço',

  twitter: {
    site: 'https://twitter.com/luminuszz1',
  },
  openGraph: {
    site_name: 'luminuszz',
    description:
      'luminuszz.dev, Welcome  This is my little space | Bem vindo, Esse é o meu pequeno espaço',
    images: [
      { url: '../assets/profile.jpeg', alt: 'Davi Ribeiro | luminuszz' },
    ],
  },

  titleTemplate: 'Luminuszz',
};

export default SEO;
