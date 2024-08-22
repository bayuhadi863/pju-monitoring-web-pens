import React from 'react';
import { Outlet } from 'react-router';
import { ThemeProvider } from '@/components/theme/theme-provider';

const RootLayout: React.FC = () => {
  return (
    <ThemeProvider
      defaultTheme='light'
      storageKey='vite-ui-theme'
    >
      <Outlet />
    </ThemeProvider>
  );
};

export default RootLayout;
