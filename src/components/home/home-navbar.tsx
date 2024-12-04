import React from 'react';
import { Button } from '../ui/button';
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, navigationMenuTriggerStyle } from '../ui/navigation-menu';
import CustomContainer from '@/components/home/custom-container';
import { Link } from 'react-router-dom';
import { useAuth } from '@/context/auth-context';
import navbarLogo from '@/assets/Logo Si PJU.png';

const HomeNavbar: React.FC = () => {
    const { user } = useAuth();
    return (
        <CustomContainer>
            <nav className='flex justify-between items-center h-[8vh]'>
                <div className='flex items-center space-x-2'>
                    <img
                        src={navbarLogo}
                        alt='Logo'
                        className='w-8 h-8 object-contain'
                    />
                    <h3 className='hidden sm:block text-2xl font-semibold text-gray-900'>SmartPJU</h3>
                </div>
                <div className='text-sm font-medium'>
                    <NavigationMenu>
                        <NavigationMenuList>
                            <NavigationMenuItem>
                                <NavigationMenuLink
                                    className={navigationMenuTriggerStyle()}
                                    href='/#home'
                                >
                                    Home
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuLink
                                    className={navigationMenuTriggerStyle()}
                                    href='/#about'
                                >
                                    About
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>
                <div>
                    {user ? (
                        <Button
                            size='default'
                            variant='outline'
                            className='px-4 py-3 border-[#E0E1E6] hover:bg-[#C6E2FF] hover:text-[#00296B] hover:border-inherit bg-white text-gray-800'
                        >
                            <Link to='/dashboard'>Dashboard</Link>
                        </Button>
                    ) : (
                        <Button
                            size='default'
                            variant='outline'
                            className='px-4 py-3 border-[#E0E1E6] hover:bg-[#C6E2FF] hover:text-[#00296B] hover:border-inherit'
                        >
                            <Link to='/login'>Login</Link>
                        </Button>
                    )}
                </div>
            </nav>
        </CustomContainer>
    );
};

export default HomeNavbar;
