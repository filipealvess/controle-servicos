import React from 'react';
import { ThemeProvider } from 'styled-components';
import AppRoutes from './routes';
import GlobalStyle from './styles/global';
import theme from './styles/theme';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AppRoutes />
    </ThemeProvider>
  );
}
