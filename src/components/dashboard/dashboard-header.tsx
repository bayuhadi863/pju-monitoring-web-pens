import React from 'react';
import { useLocation } from 'react-router';
import ThemeSwitch from '../theme/theme-switch';

const DashboardHeader: React.FC = () => {
  const pathname = useLocation().pathname;

  const generatePageTitle = () => {
    if (pathname === '/dashboard') return 'Dashboard';
    if (pathname === '/dashboard/pju') return 'PJU Device(s)';
    if (pathname === '/dashboard/cctv') return 'Live CCTV';
    if (pathname === '/dashboard/chatbot') return 'Chatbot AI';
  };

  const generatePageSubTitle = () => {
    if (pathname === '/dashboard') return 'Pemantau Sensor Cuaca dan Kualitas Udara';
    if (pathname === '/dashboard/pju') return 'Pantau dan Kontrol Device Penerangan Jalan Umum (PJU)';
    if (pathname === '/dashboard/cctv') return 'Pemantau Rekaman Live Kamera CCTV';
    if (pathname === '/dashboard/chatbot') return 'Aplikasi Chatbot Berbasis AI';
  };

  return (
    <header className='flex justify-between items-center gap-2'>
      <div>
        <h1 className='text-lg font-semibold'>{generatePageTitle()}</h1>
        <p className='text-xs text-muted-foreground'>{generatePageSubTitle()}</p>
      </div>
      <ThemeSwitch />
    </header>
  );
};

export default DashboardHeader;
