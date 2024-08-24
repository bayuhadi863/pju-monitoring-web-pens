import React from 'react';
import { IoLocationSharp } from 'react-icons/io5';

const Location: React.FC = () => {
  return (
    <div className='flex items-center gap-2 text-sm text-muted-foreground'>
      <IoLocationSharp />
      <p>Jl. Keputih, Surabaya</p>
    </div>
  );
};

export default Location;
