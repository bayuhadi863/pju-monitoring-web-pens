import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Edit, Trash2, MoreHorizontal } from 'lucide-react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import useUserManagementStore from '@/stores/user-management-store';

type UserActionsProps = {
    userId: number;
};

const UserActions: React.FC<UserActionsProps> = ({ userId }) => {
    const setConfirmDeleteUserDialogOpen = useUserManagementStore((state) => state.setConfirmDeleteUserDialogOpen);
    const { setUpdateUserDialogOpen, setUpdateUserId, setDeleteUserId } = useUserManagementStore((state) => state);

    const [menuOpen, setMenuOpen] = useState<boolean>(false);

    return (
        <DropdownMenu
            open={menuOpen}
            onOpenChange={setMenuOpen}
        >
            <DropdownMenuTrigger asChild>
                <Button
                    variant='ghost'
                    className='h-8 w-8 p-0'
                >
                    <span className='sr-only'>Open menu</span>
                    <MoreHorizontal className='h-4 w-4' />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align='end'>
                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                <DropdownMenuSeparator />

                <DropdownMenuItem
                    className='cursor-pointer'
                    onSelect={(e) => {
                        e.preventDefault();
                        setUpdateUserId(userId);
                        setUpdateUserDialogOpen(true);
                        setMenuOpen(false);
                    }}
                >
                    <Edit className='mr-2 h-4 w-4' />
                    Edit
                </DropdownMenuItem>

                <DropdownMenuItem
                    className='text-red-600 focus:text-red-600 focus:bg-red-100 dark:focus:bg-red-950 cursor-pointer'
                    onSelect={(e) => {
                        e.preventDefault();
                        setDeleteUserId(userId);
                        setConfirmDeleteUserDialogOpen(true);
                        setMenuOpen(false);
                    }}
                >
                    <Trash2 className='mr-2 h-4 w-4' />
                    Hapus
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default UserActions;
