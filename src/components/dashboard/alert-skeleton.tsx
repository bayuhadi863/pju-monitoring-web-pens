import { FC } from 'react';
import { Skeleton } from '../ui/skeleton';

const AlertSkeleton: FC = () => {
  return <Skeleton className='bg-slate-200 dark:bg-slate-800 h-20 w-full rounded-lg' />;
};

export default AlertSkeleton;
