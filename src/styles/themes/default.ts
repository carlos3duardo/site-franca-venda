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
      50: '#F5FFE9',
      100: '#E1F3CC',
      200: '#CDE6AF',
      300: '#A5CD75',
      400: '#7DB43B',
      500: '#549B00',
      600: '#4E8B07',
      700: '#487A0D',
      800: '#426913',
      900: '#3B5819',
    },
  },
};

const customTheme = extendTheme(theme);

export default customTheme;
