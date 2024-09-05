import React from 'react';
import { Outlet } from 'react-router';
import { ThemeProvider } from '@/components/theme/theme-provider';
import { Toaster } from '@/components/ui/toaster';

const RootLayout: React.FC = () => {
  return (
    <ThemeProvider
      defaultTheme='light'
      storageKey='vite-ui-theme'
    >
      <Toaster />
      <Outlet />
    </ThemeProvider>
  );
};

export default RootLayout;
