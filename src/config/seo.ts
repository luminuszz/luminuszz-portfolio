import { DefaultSeoProps } from 'next-seo';

const SEO: DefaultSeoProps = {
  title: 'Davi Ribeiro | Luminuszz',

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
      {
        url:
          'https://avatars2.githubusercontent.com/u/48535259?s=460&u=06d85ab11a1bdb43207be7c6b2a2c491a48ca0b2&v=4',
        alt: 'Davi Ribeiro | luminuszz',
        width: 100,
        height: 100,
      },
    ],
  },

  titleTemplate: 'Luminuszz | Davi Ribeiro',
};

export default SEO;
