import { extendTheme } from '@chakra-ui/react';

/*
:root {
  background: $color-background;
  scroll-behavior: smooth;
  --family-primary: 'Roboto';
  --family-secondary: 'Montserrat';
  --color-background: #;
  --color-neutral: #ffff;
}
*/

export const theme = extendTheme({
  colors: {
    blue: {
      '900': '#181b2b',
    },
  },

  styles: {
    global: {
      body: {
        bg: 'blue.900',
        color: 'white',
      },
    },
  },

  fonts: {
    body: 'Roboto',
    heading: 'Montserrat',
  },
});
