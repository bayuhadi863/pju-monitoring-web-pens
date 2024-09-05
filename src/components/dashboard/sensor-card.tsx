import React from 'react';
import { Card } from '../ui/card';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';

type SensorCardProps = {
  title: string;
  subTitle?: string;
  value?: string | number;
  unit?: string;
  color?: string;
  icon: React.ReactNode;
  info?: React.ReactNode;
};

const SensorCard: React.FC<SensorCardProps> = ({ title, subTitle, value, unit, color, icon, info }) => {
  const generateTextColor = (color?: string) => {
    switch (color) {
      case 'red':
        return 'text-red-600';
      case 'green':
        return 'text-green-600';
      case 'yellow':
        return 'text-yellow-400';
      case 'blue':
        return 'text-blue-400';
      default:
        return '';
    }
  };

  const generateBackgroundColor = (color?: string) => {
    switch (color) {
      case 'red':
        return 'bg-red-600';
      case 'green':
        return 'bg-green-600';
      case 'yellow':
        return 'bg-yellow-400';
      case 'blue':
        return 'bg-blue-400';
      default:
        return 'bg-blue-600';
    }
  };

  return (
    <Card className='px-3 py-3 shadow'>
      <div className='flex h-full gap-3 w-full'>
        <div className={`${generateBackgroundColor(color)} w-1 min-h-full rounded-md`}></div>
        <div className='h-full flex flex-col justify-between gap-3 w-full'>
          <div>
            <div className='flex items-center gap-1'>
              <h3 className='text-sm font-semibold'>{title}</h3>
            </div>
            <p className='text-xs text-muted-foreground'>{subTitle}</p>
          </div>
          <div className='flex justify-between items-center w-full'>
            <p className={`font-semibold ${generateTextColor(color)}`}>
              {value} <span>{unit}</span>
            </p>
            <Popover>
              <PopoverTrigger>{title === 'Kecepatan Angin' ? <div className='hover:bg-accent rounded'>{icon}</div> : <div className='hover:bg-accent rounded p-1'>{icon}</div>}</PopoverTrigger>
              <PopoverContent>{info}</PopoverContent>
            </Popover>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default SensorCard;
