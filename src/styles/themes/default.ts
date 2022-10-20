// Overriding Chakra UI variables

import { extendTheme } from '@chakra-ui/react';

const theme = {
  styles: {
    global: {
      body: {
        backgroundColor: 'white',
      },
      a: {
        color: '#428ac2',
      },
    },
  },
  fonts: {
    body: 'Inter, Helvetica, Arial, sans-serif',
    heading: 'Kontora, Helvetica, Arial, sans-serif',
    mono: 'monospace',
  },
  fontWeights: {
    normal: 400,
    regular: 400,
    semibold: 500,
    bold: 700,
  },
  colors: {
    primary: {
      50: '#edf6fc',
      100: '#b9d7ed',
      200: '#85b7dd',
      300: '#5197cd',
      400: '#3787c5',
      500: '#1c77bd',
      600: '#17629c',
      700: '#124d7a',
      800: '#0d3859',
      900: '#082237',
    },
  },
};

const customTheme = extendTheme(theme);

export default customTheme;
