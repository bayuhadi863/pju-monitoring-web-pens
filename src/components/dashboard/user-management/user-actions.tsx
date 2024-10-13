import React from 'react';
import { Button } from '@/components/ui/button';
import { Edit, Trash2, MoreHorizontal } from 'lucide-react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import useUserManagementStore from '@/stores/user-management-store';
import ConfirmDeleteDialog from './confirm-delete-dialog';

type UserActionsProps = {
  userId: number;
};

const UserActions: React.FC<UserActionsProps> = ({ userId }) => {
  const confirmDeleteUserDialogOpen = useUserManagementStore((state) => state.confirmDeleteUserDialogOpen);
  const setConfirmDeleteUserDialogOpen = useUserManagementStore((state) => state.setConfirmDeleteUserDialogOpen);

  return (
    <DropdownMenu>
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
        <DropdownMenuItem className='cursor-pointer'>
          <Edit className='mr-2 h-4 w-4' />
          Edit
        </DropdownMenuItem>
        <ConfirmDeleteDialog
          userId={userId}
          trigger={
            <DropdownMenuItem
              className='text-red-600 focus:text-red-600 focus:bg-red-100 dark:focus:bg-red-950 cursor-pointer'
              onSelect={(e) => {
                e.preventDefault();
                setConfirmDeleteUserDialogOpen(true);
              }}
            >
              <Trash2 className='mr-2 h-4 w-4' />
              Hapus
            </DropdownMenuItem>
          }
        />
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserActions;
