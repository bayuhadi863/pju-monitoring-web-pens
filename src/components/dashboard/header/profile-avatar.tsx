import { useState, useRef, useEffect } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { LogOut, Loader2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { exceptionHandler } from '@/lib/utils/exception-handler';
import { useToast } from '@/components/hooks/use-toast';
import { AxiosResponse } from 'axios';

interface ProfileAvatarProps {
    username: string;
    avatarUrl?: string;
    onLogout: () => Promise<AxiosResponse<unknown, unknown>>;
    roleCode: string;
}

export default function ProfileAvatar({ username, avatarUrl, onLogout, roleCode }: ProfileAvatarProps) {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [logoutLoading, setLogoutLoading] = useState<boolean>(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const navigate = useNavigate();
    const { toast } = useToast();

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

    const handleLogout = async () => {
        try {
            setLogoutLoading(true);
            await onLogout();
            setIsOpen(false);
            navigate('/login');
            setLogoutLoading(false);
        } catch (error) {
            exceptionHandler(error, {
                onClientError: (message) => {
                    toast({
                        variant: 'destructive',
                        duration: 3000,
                        title: 'Login Gagal!',
                        description: message,
                    });
                },
                onServerError: () => {
                    toast({
                        variant: 'destructive',
                        duration: 3000,
                        title: 'Terjadi Kesalahan!',
                        description: 'Internal server error. Coba lagi nanti.',
                    });
                },
                onUnexpectedError: () => {
                    toast({
                        variant: 'destructive',
                        duration: 3000,
                        title: 'Terjadi Kesalahan!',
                        description: 'Error tidak diketahui. Coba lagi nanti.',
                    });
                },
            });
        }
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
                <div className='absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-background border border-border z-50'>
                    <div className='rounded-md ring-1 ring-black ring-opacity-5 py-1'>
                        <div className='px-4 py-2 text-sm text-muted-foreground border-b border-border'>
                            <p className='font-medium text-foreground'>{username}</p>
                            <p className='text-xs'>{roleCode}</p>
                        </div>
                        {/* <Link
                            to='/dashboard/account'
                            className='flex items-center px-4 py-2 text-sm text-foreground hover:bg-muted transition-colors duration-150 ease-in-out'
                            onClick={() => setIsOpen(false)}
                        >
                            <Settings className='mr-2 h-4 w-4' />
                            Account Settings
                        </Link> */}
                        <button
                            onClick={handleLogout}
                            className='flex w-full items-center px-4 py-2 text-sm text-red-600 hover:bg-red-50 dark:hover:bg-red-950 transition-colors duration-150 ease-in-out'
                        >
                            {logoutLoading ? <Loader2 className='mr-2 h-4 w-4 animate-spin' /> : <LogOut className='mr-2 h-4 w-4' />}
                            Logout
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
