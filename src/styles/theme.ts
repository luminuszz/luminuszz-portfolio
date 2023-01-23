import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  colors: {
    blue: {
      '900': '#181b2b',
    },
  },

  styles: {
    global: {
      body: {
        color: 'white',
      },
    },
  },

  fonts: {
    body: 'Roboto',
    heading: 'Montserrat',
  },

  config: {
    initialColorMode: 'dark',
  },
});
