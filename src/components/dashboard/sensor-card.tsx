import React from 'react';
import { Card } from '../ui/card';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';

type SensorCardProps = {
  title: string;
  subTitle?: string;
  value?: string | number;
  unit?: string;
  color?: string;
  icon?: React.ReactNode;
  info?: React.ReactNode;
  isLoading: boolean;
};

const SensorCard: React.FC<SensorCardProps> = ({ title, subTitle, value, unit, color, icon, info, isLoading }) => {
  const roundedValue = Math.round(Number(value) * 10) / 10;
  const valueExists = value !== null && value !== undefined;

  const generateTextColor = (color?: string) => {
    switch (color) {
      case 'red':
        return 'text-red-600';
      case 'green':
        return 'text-green-600';
      case 'yellow':
        return 'text-yellow-400';
      case 'blue':
        return 'text-primary';
      default:
        return '';
    }
  };

  const generateIconBackgroundColor = (color?: string) => {
    switch (color) {
      case 'red':
        return 'bg-red-600/10 hover:bg-red-600/20 transition';
      case 'green':
        return 'bg-green-600/10 hover:bg-green-600/20 transition';
      case 'yellow':
        return 'bg-yellow-400/10 hover:bg-yellow-400/20 transition';
      case 'blue':
        return 'bg-primary/10 hover:bg-primary/20 transition';
      default:
        return 'bg-primary/10 hover:bg-primary/20 transition';
    }
  };

  return (
    <Card className='px-5 py-4 shadow-md'>
      <div className='flex h-full gap-3 w-full'>
        <div className='h-full flex flex-col justify-between gap-3 w-full'>
          <div>
            <div className='flex items-center gap-1'>
              <h3 className='text-lg font-semibold'>{title}</h3>
            </div>
            <p className='text-xs text-muted-foreground'>{subTitle}</p>
          </div>
          <div className='flex justify-between items-center w-full'>
            <div className={`flex items-baseline gap-1 ${generateTextColor(color)}`}>
              <p className={`font-bold text-3xl`}>{isLoading ? '---' : roundedValue}</p>
              <p className='font-semibold'>{unit}</p>
            </div>

            {valueExists && (
              <Popover>
                <PopoverTrigger>
                  {title === 'Kecepatan Angin' ? (
                    <div className={`${generateIconBackgroundColor(color)} rounded-full p-1 text-base`}>{icon}</div>
                  ) : (
                    <div className={`${generateIconBackgroundColor(color)} rounded-full p-2 text-lg`}>{icon}</div>
                  )}
                </PopoverTrigger>
                <PopoverContent>{info}</PopoverContent>
              </Popover>
            )}
          </div>
        </div>
      </div>
    </Card>
  );
};

export default SensorCard;
