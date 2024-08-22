import React from 'react';
import { Button } from '../ui/button';
import { useTheme } from './theme-provider';
import { Sun, Moon } from 'lucide-react';

const ThemeSwitch: React.FC = () => {
  const { setTheme } = useTheme();

  return (
    <div>
      <Button
        variant='ghost'
        size='icon'
        onClick={() => setTheme('dark')}
        className='dark:hidden'
      >
        <Moon className='h-5 w-5' />
      </Button>
      <Button
        variant='ghost'
        size='icon'
        onClick={() => setTheme('light')}
        className='hidden dark:flex'
      >
        <Sun className='h-5 w-5' />
      </Button>
    </div>
  );
};

export default ThemeSwitch;
