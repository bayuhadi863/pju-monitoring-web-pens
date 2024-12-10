import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import useProfileManagementStore from '@/stores/profile-management-store';

const DeleteCard: React.FC = () => {
  const setConfirmDeleteProfileDialogOpen = useProfileManagementStore((state) => state.setConfirmDeleteProfileDialogOpen);
  return (
    <Card>
      <CardHeader>
        <CardTitle>Hapus Akun</CardTitle>
        <CardDescription>Data profil yang dihapus tidak dapat dipulihkan. Apakah Anda yakin ingin melanjutkan?</CardDescription>
      </CardHeader>
      <CardFooter>
        <div className='flex justify-start w-full'>
          <button
            type='button'
            onClick={(e) => {
              e.preventDefault();
              setConfirmDeleteProfileDialogOpen(true);
            }}
            className='bg-red-500 text-white py-2 px-4 rounded-lg'
          >
            Delete
          </button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default DeleteCard;
