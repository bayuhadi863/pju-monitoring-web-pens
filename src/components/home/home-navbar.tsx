import React from 'react';
import { Button } from '../ui/button';
import CustomContainer from '@/components/home/custom-container';
import { Link } from 'react-router-dom';
import appLogo from '@/assets/app-logo-light-blue.png';
import pemkotLogo from '@/assets/pemkot.png';
import pensLogo from '@/assets/pens.png';
import { useAuth } from '@/context/auth-context';

const HomeNavbar: React.FC = () => {
    const { user } = useAuth();

    return (
        <CustomContainer>
            <nav className='flex justify-between items-center h-20'>
                <div className='flex gap-4 sm:gap-8'>
                    <Link
                        to='/'
                        className='flex items-center gap-2'
                    >
                        <img
                            src={appLogo}
                            alt='App Logo'
                            className='w-8 h-8'
                        />
                        <span className='text-lg font-semibold text-primary uppercase'>Smart PJU Monitor</span>
                    </Link>

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
                </div>
                <div>
                    <ul className='flex gap-4 items-center'>
                        <li>
                            <a href='#'>Home</a>
                        </li>
                        <li>
                            <a href='#'>About</a>
                        </li>
                        <li>
                            <a href='#'>Features</a>
                        </li>
                    </ul>
                </div>
                <div>
                    {user ? (
                        <Button>
                            <Link to='/dashboard'>Dashboard</Link>
                        </Button>
                    ) : (
                        <Button>
                            <Link to='/login'>Login</Link>
                        </Button>
                    )}
                </div>
            </nav>
        </CustomContainer>
    );
};

export default HomeNavbar;
