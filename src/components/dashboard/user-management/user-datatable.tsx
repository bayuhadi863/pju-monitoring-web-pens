import React, { useEffect } from 'react';
import { ColumnDef } from '@tanstack/react-table';
import { Button } from '@/components/ui/button';
import { ArrowUpDown, ArrowUp, ArrowDown } from 'lucide-react';
import DataTable from '../table/datatable';
import moment from 'moment';
import { Badge } from '@/components/ui/badge';
import useUserManagementStore from '@/stores/user-management-store';
import UserActions from './user-actions';

type UserColumn = {
  id: number;
  username: string;
  email?: string;
  role: string;
  updated_at: string;
  name?: string;
};

const columns: ColumnDef<UserColumn>[] = [
  {
    accessorKey: 'name',
    header: ({ column }) => {
      return (
        <Button
          variant='ghost'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Nama
          {column.getIsSorted() ? column.getIsSorted() === 'asc' ? <ArrowUp className='ml-2 h-4 w-4' /> : <ArrowDown className='ml-2 h-4 w-4' /> : <ArrowUpDown className='ml-2 h-4 w-4' />}
        </Button>
      );
    },
    cell: ({ row }) => <div>{row.getValue('name') ?? ''}</div>,
  },
  {
    accessorKey: 'username',
    header: ({ column }) => {
      return (
        <Button
          variant='ghost'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Username
          {column.getIsSorted() ? column.getIsSorted() === 'asc' ? <ArrowUp className='ml-2 h-4 w-4' /> : <ArrowDown className='ml-2 h-4 w-4' /> : <ArrowUpDown className='ml-2 h-4 w-4' />}
        </Button>
      );
    },
    cell: ({ row }) => <div>{row.getValue('username')}</div>,
  },
  {
    accessorKey: 'email',
    header: ({ column }) => {
      return (
        <Button
          variant='ghost'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Email
          {column.getIsSorted() ? column.getIsSorted() === 'asc' ? <ArrowUp className='ml-2 h-4 w-4' /> : <ArrowDown className='ml-2 h-4 w-4' /> : <ArrowUpDown className='ml-2 h-4 w-4' />}
        </Button>
      );
    },
    cell: ({ row }) => <div>{row.getValue('email') ?? ''}</div>,
  },
  {
    accessorKey: 'role',
    header: ({ column }) => {
      return (
        <Button
          variant='ghost'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Role
          {column.getIsSorted() ? column.getIsSorted() === 'asc' ? <ArrowUp className='ml-2 h-4 w-4' /> : <ArrowDown className='ml-2 h-4 w-4' /> : <ArrowUpDown className='ml-2 h-4 w-4' />}
        </Button>
      );
    },
    cell: ({ row }) => {
      const variant = row.getValue('role') === 'Administrator' ? 'default' : 'secondary';

      return (
        <div>
          <Badge variant={variant}>{row.getValue('role')}</Badge>
        </div>
      );
    },
  },
  {
    accessorKey: 'updated_at',
    header: ({ column }) => {
      return (
        <Button
          variant='ghost'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Last Updated
          {column.getIsSorted() ? column.getIsSorted() === 'asc' ? <ArrowUp className='ml-2 h-4 w-4' /> : <ArrowDown className='ml-2 h-4 w-4' /> : <ArrowUpDown className='ml-2 h-4 w-4' />}
        </Button>
      );
    },
    cell: ({ row }) => {
      const date = row.getValue('updated_at');
      if (!date) return <div>-</div>;

      const formattedDate = moment(date).format('DD-MM-YYYY HH:mm:ss');
      return <div>{formattedDate}</div>;
    },
  },
  {
    id: 'actions',
    enableHiding: false,
    cell: ({ row }) => <UserActions userId={row.original.id} />,
  },
];

const UserDatatable: React.FC = () => {
  const users = useUserManagementStore((state) => state.users);
  const fetchUsersLoading = useUserManagementStore((state) => state.fetchUsersLoading);
  const fetchUsersError = useUserManagementStore((state) => state.fetchUsersError);
  const fetchUsers = useUserManagementStore((state) => state.fetchUsers);

  useEffect(() => {
    fetchUsers();
  }, []);

  const data: UserColumn[] = users.map((user) => ({
    id: user.id,
    username: user.username,
    email: user.email,
    role: user.role.name,
    updated_at: user.updated_at,
    name: user.name,
  }));

  return (
    <DataTable
      columnsData={columns}
      data={data}
      isLoading={fetchUsersLoading}
      isError={fetchUsersError}
    />
  );
};

export default UserDatatable;
