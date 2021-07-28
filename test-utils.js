import React from 'react';
import { ThemeProvider } from '@shopify/restyle';
import { render as rntlRender } from '@testing-library/react-native';

import theme from './components/Themed';

function render(ui, opts) {
  return rntlRender(ui, {
    wrapper: ({ children }) => (
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    ),
  });
}

export * from '@testing-library/react-native';
export { render };
