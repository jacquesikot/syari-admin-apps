import { createTheme, createText, createBox } from '@shopify/restyle';

const theme = createTheme({
  colors: {
    primary: '#000',
    secondary: '#fff',
    tertiary: 'rgba(0,0,0,0.5)',
    accent: '#F1F1F1',
    textDark: '#1A202C',
    textLight: '#F7FAFC',
    error: '#F44336',
    success: '#5CB85C',
  },
  spacing: {
    s: 5,
    m: 10,
    l: 15,
    xl: 20,
    xxl: 30,
    xxxl: 40,
  },
  borderRadii: {
    none: 0,
    s: 5,
    m: 10,
    l: 15,
    xl: 20,
  },
  textVariants: {
    h1: {
      fontSize: 25,
      fontFamily: 'Nunito-Bold',
    },
    h2: {
      fontSize: 22,
      fontFamily: 'Nunito-Bold',
    },
    h3b: {
      fontSize: 19,
      fontFamily: 'Nunito-Bold',
    },
    h3: {
      fontSize: 19,
      fontFamily: 'Nunito-SemiBold',
    },
    h4b: {
      fontSize: 17,
      fontFamily: 'Nunito-Bold',
    },
    h4: {
      fontSize: 17,
      fontFamily: 'Nunito-SemiBold',
    },
    p1b: {
      fontSize: 17,
      fontFamily: 'Nunito-SemiBold',
    },
    p1: {
      fontSize: 17,
      fontFamily: 'Nunito-Regular',
    },
    p2: {
      fontSize: 15,
      fontFamily: 'Nunito-Regular',
    },
    p2l: {
      fontSize: 15,
      fontFamily: 'Nunito-Light',
    },
    p3: {
      fontSize: 13,
      fontFamily: 'Nunito-Regular',
    },
  },
  breakpoints: {
    phone: 0,
    tablet: 768,
  },
});

export type Theme = typeof theme;
export const Text = createText<Theme>();
export const Box = createBox<Theme>();
export default theme;
