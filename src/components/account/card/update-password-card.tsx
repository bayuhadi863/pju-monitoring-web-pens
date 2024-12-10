import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import UpdatePasswordForm from '../form/update-password-form';

const UpdatePasswordCard: React.FC = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Perbarui Kata Sandi</CardTitle>
        <CardDescription>Perbarui kata sandi Anda secara berkala untuk menjaga keamanan akun Anda.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className='lg:w-1/2'>
          <UpdatePasswordForm />
        </div>
      </CardContent>
    </Card>
  );
};

export default UpdatePasswordCard;
