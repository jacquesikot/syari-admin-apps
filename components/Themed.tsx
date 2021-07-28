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
      fontSize: 28,
      fontFamily: 'Nunito-Bold',
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
