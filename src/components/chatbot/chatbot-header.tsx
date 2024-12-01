import React from 'react';
import ThemeSwitch from '../theme/theme-switch';
import { Link } from 'react-router-dom';
import pemkotLogo from '@/assets/pemkot.png';
import pensLogo from '@/assets/pens.png';

const ChatbotHeader: React.FC = () => {
    return (
        <div className='w-full py-4 flex justify-between items-center'>
            <div className='flex items-center gap-4 sm:gap-8'>
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
                <Link
                    to='/dashboard'
                    className='hover:underline'
                >
                    Dashboard
                </Link>
            </div>
            <ThemeSwitch />
        </div>
    );
};

export default ChatbotHeader;
