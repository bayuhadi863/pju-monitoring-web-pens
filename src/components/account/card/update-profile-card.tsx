import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import UpdateForm from '@/components/account/form/update-profile-form';

const UpdateCard: React.FC = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Perbarui Profil</CardTitle>
        <CardDescription>Perbarui informasi profil menggunakan formulir di bawah ini.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className='lg:w-1/2'>
          <UpdateForm />
        </div>
      </CardContent>
    </Card>
  );
};

export default UpdateCard;
