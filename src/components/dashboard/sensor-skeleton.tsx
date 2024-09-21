import React from 'react';
import { Skeleton } from '@/components/ui/skeleton';

const generateSkeletons = (count: number, className: string) => {
  return Array.from({ length: count }).map((_, i) => (
    <div key={i}>
      <Skeleton className={className} />
    </div>
  ));
};

const SensorSkeleton: React.FC = () => {
  return (
    <div className='mt-4 mb-2'>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-2'>{generateSkeletons(8, 'h-24')}</div>
    </div>
  );
};

export default SensorSkeleton;
