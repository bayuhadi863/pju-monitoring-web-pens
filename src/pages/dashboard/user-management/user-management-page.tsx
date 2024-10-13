import PageDescription from '@/components/dashboard/page-title/page-description';
import PageTitle from '@/components/dashboard/page-title/page-title';
import UserDatatable from '@/components/dashboard/user-management/user-datatable';
import { FC } from 'react';
import { Card } from '@/components/ui/card';
import CreateUserDialog from '@/components/dashboard/user-management/create-user-dialog';

const UserManagementPage: FC = () => {
  return (
    <div>
      <div className='mb-4'>
        <PageTitle className='mb-1'>Manajemen User</PageTitle>
        <PageDescription>Kelola User/Pengguna Aplikasi.</PageDescription>
      </div>

      <Card className='p-2 md:p-5'>
        <div className='flex justify-between items-center gap-2 mb-4'>
          <h2 className='text-xl font-semibold'>Daftar User</h2>
          <CreateUserDialog />
        </div>
        <UserDatatable />
      </Card>
    </div>
  );
};

export default UserManagementPage;
