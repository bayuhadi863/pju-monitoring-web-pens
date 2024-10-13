import React from 'react';
import { Outlet } from 'react-router';
import { ThemeProvider } from '@/components/theme/theme-provider';
import { Toaster } from '@/components/ui/toaster';
import { AuthProvider } from '@/context/auth-context';

const RootLayout: React.FC = () => {
  return (
    <AuthProvider>
      <ThemeProvider
        defaultTheme='light'
        storageKey='vite-ui-theme'
      >
        <Toaster />
        <Outlet />
      </ThemeProvider>
    </AuthProvider>
  );
};

export default RootLayout;
