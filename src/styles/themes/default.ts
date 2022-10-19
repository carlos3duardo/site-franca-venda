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
    heading: 'Inter, Helvetica, Arial, sans-serif',
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
      50: '#C9DEEE',
      100: '#AECDE5',
      200: '#93BCDC',
      300: '#78ACD3',
      400: '#5D9BCB',
      500: '#428ac2',
      600: '#3777A8',
      700: '#2E638C',
      800: '#244F70',
      900: '#1B3C54',
    },
  },
};

const customTheme = extendTheme(theme);

export default customTheme;
