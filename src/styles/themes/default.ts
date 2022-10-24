// Overriding Chakra UI variables

import { extendTheme } from '@chakra-ui/react';

const theme = {
  styles: {
    global: {
      html: {
        scrollBehavior: 'smooth',
      },
      body: {
        backgroundColor: 'white',
        fontSize: '1.125rem',
      },
      a: {
        color: '#428ac2',
      },
    },
  },
  fonts: {
    body: 'Kontora, Helvetica, Arial, sans-serif',
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
    secondary: {
      50: '#FDF7E2',
      100: '#FCF1CD',
      200: '#FBEBB8',
      300: '#F8DF8D',
      400: '#F6D362',
      500: '#F3C637',
      600: '#DFB531',
      700: '#CBA42B',
      800: '#A2821E',
      900: '#503E05',
    },
  },
};

const customTheme = extendTheme(theme);

export default customTheme;
