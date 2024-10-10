import React from 'react';
import { useLocation } from 'react-router';
import ThemeSwitch from '../theme/theme-switch';
import ProfileAvatar from './header/profile-avatar';

const DashboardHeader: React.FC = () => {
  const pathname = useLocation().pathname;

  const generatePageTitle = () => {
    if (pathname === '/dashboard') return 'Dashboard';
    if (pathname === '/dashboard/pju') return 'Perangkat PJU';
    if (pathname === '/dashboard/cctv') return 'Rekaman Live CCTV';
    if (pathname === '/dashboard/chatbot') return 'Chatbot AI';
    if (pathname === '/dashboard/account') return 'Akun Pengguna';
  };

  const generatePageSubTitle = () => {
    if (pathname === '/dashboard') return 'Pemantau Sensor Cuaca dan Kualitas Udara';
    if (pathname === '/dashboard/pju') return 'Pantau dan Kontrol Device Penerangan Jalan Umum (PJU)';
    if (pathname === '/dashboard/cctv') return 'Pemantau Rekaman Live Kamera CCTV';
    if (pathname === '/dashboard/chatbot') return 'Aplikasi Chatbot Berbasis AI';
    if (pathname === '/dashboard/account') return 'Kelola Akun Anda';
  };

  return (
    <header className='flex justify-between items-center gap-2 w-full'>
      <div>
        <h1 className='text-xl font-semibold mb-1'>{generatePageTitle()}</h1>
        <p className='text-xs text-muted-foreground'>{generatePageSubTitle()}</p>
      </div>
      <div className='flex items-center gap-3'>
        <ThemeSwitch />
        <ProfileAvatar
          username='bayuhadileksana'
          avatarUrl='https://image.com'
          onLogout={() => {}}
        />
      </div>
    </header>
  );
};

export default DashboardHeader;
