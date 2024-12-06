import React from 'react';
import ThemeSwitch from '../theme/theme-switch';
import ProfileAvatar from './header/profile-avatar';
import { useAuth } from '@/context/auth-context';
import { LogIn } from 'lucide-react';
import { Button } from '../ui/button';
import { Link } from 'react-router-dom';
import pemkotLogo from '@/assets/pemkot.png';
import pensLogo from '@/assets/PENS.png';

const DashboardHeader: React.FC = () => {
    const { user, logoutUser } = useAuth();

    return (
        <header className='flex justify-between items-center gap-2 w-full'>
            <div className='flex gap-1 items-center'>
                <img
                    src={pemkotLogo}
                    alt='Pemkot Logo'
                    className='h-11'
                />
                <img
                    src={pensLogo}
                    alt='PENS Logo'
                    className='h-11'
                />
            </div>
            <div className='flex items-center gap-3'>
                <ThemeSwitch />
                {user ? (
                    <ProfileAvatar
                        username={user.username}
                        avatarUrl='https://image.com'
                        onLogout={logoutUser}
                        roleCode={user.role_code}
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
