import React from 'react';
import { Skeleton } from '@/components/ui/skeleton';

const generateSkeletons = (count: number, className: string) => {
  return Array.from({ length: count }).map((_, i) => (
    <div key={i}>
      <Skeleton className={className} />
    </div>
  ));
};

const PjuMonitorSkeleton: React.FC = () => {
  return (
    <div className='mt-4 mb-2'>
      <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>{generateSkeletons(6, 'h-40 bg-slate-200 dark:bg-slate-800')}</div>
    </div>
  );
};

export default PjuMonitorSkeleton;
