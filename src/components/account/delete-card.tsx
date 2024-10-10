import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';

const DeleteCard: React.FC = () => {
  const handleDelete = () => {
    // Logic for delete action
    console.log('Deleting user...');
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Delete User</CardTitle>
        <CardDescription>Are you sure you want to delete this user?</CardDescription>
      </CardHeader>
      <CardFooter>
        <div className='flex justify-start w-full'>
          <button
            type='button'
            onClick={handleDelete}
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
