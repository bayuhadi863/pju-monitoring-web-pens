'use client';

import { useState, useRef, useEffect } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { User, Settings, LogOut } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ProfileAvatarProps {
  username: string;
  avatarUrl?: string;
  onLogout: () => void;
}

export default function ProfileAvatar({ username, avatarUrl, onLogout }: ProfileAvatarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' || event.key === ' ') {
      toggleDropdown();
    }
  };

  const handleLogout = () => {
    setIsOpen(false);
    onLogout();
  };

  return (
    <div
      className='relative'
      ref={dropdownRef}
    >
      <button
        className='focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-primary rounded-full'
        onClick={toggleDropdown}
        onKeyDown={handleKeyDown}
        aria-haspopup='true'
        aria-expanded={isOpen}
      >
        <Avatar className='h-10 w-10'>
          <AvatarImage
            src={avatarUrl}
            alt={username}
          />
          <AvatarFallback className='bg-primary bg-slate-200 hover:bg-slate-300 dark:bg-muted dark:hover:bg-slate-700'>{username.slice(0, 2).toUpperCase()}</AvatarFallback>
        </Avatar>
      </button>
      {isOpen && (
        <div className='absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-background border border-border'>
          <div className='rounded-md ring-1 ring-black ring-opacity-5 py-1'>
            <div className='px-4 py-2 text-sm text-muted-foreground border-b border-border'>
              <p className='font-medium text-foreground'>{username}</p>
              <p className='text-xs'>Signed in</p>
            </div>
            <Link
              to='/dashboard/account'
              className='flex items-center px-4 py-2 text-sm text-foreground hover:bg-muted transition-colors duration-150 ease-in-out'
              onClick={() => setIsOpen(false)}
            >
              <Settings className='mr-2 h-4 w-4' />
              Account Settings
            </Link>
            <button
              onClick={handleLogout}
              className='flex w-full items-center px-4 py-2 text-sm text-red-600 hover:bg-red-50 dark:hover:bg-red-950 transition-colors duration-150 ease-in-out'
            >
              <LogOut className='mr-2 h-4 w-4' />
              Logout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
