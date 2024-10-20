import React from 'react';
import ThemeSwitch from '../theme/theme-switch';
import ProfileAvatar from './header/profile-avatar';
import { useAuth } from '@/context/auth-context';
import { LogIn } from 'lucide-react';
import { Button } from '../ui/button';
import { Link } from 'react-router-dom';

const DashboardHeader: React.FC = () => {
  const { user, logoutUser } = useAuth();

  return (
    <header className='flex justify-end items-center gap-2 w-full'>
      <div className='flex items-center gap-3'>
        <ThemeSwitch />
        {user ? (
          <ProfileAvatar
            username='bayuhadileksana'
            avatarUrl='https://image.com'
            onLogout={logoutUser}
          />
        ) : (
          <Button>
            <Link
              to='/login'
              className='flex items-center gap-2'
            >
              <LogIn className='h-4 w-4' /> <span>Login</span>
            </Link>
          </Button>
        )}
      </div>
    </header>
  );
};

export default DashboardHeader;
