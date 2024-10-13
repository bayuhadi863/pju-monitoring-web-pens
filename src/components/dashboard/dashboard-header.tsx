import React from 'react';
import ThemeSwitch from '../theme/theme-switch';
import ProfileAvatar from './header/profile-avatar';
import { useAuth } from '@/context/auth-context';

const DashboardHeader: React.FC = () => {
  const { user, logoutUser } = useAuth();

  return (
    <header className='flex justify-end items-center gap-2 w-full'>
      <div className='flex items-center gap-3'>
        <ThemeSwitch />
        {user && (
          <ProfileAvatar
            username='bayuhadileksana'
            avatarUrl='https://image.com'
            onLogout={logoutUser}
          />
        )}
      </div>
    </header>
  );
};

export default DashboardHeader;
