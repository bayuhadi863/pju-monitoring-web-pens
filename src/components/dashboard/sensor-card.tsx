import React from 'react';
import { Card } from '../ui/card';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Drawer, DrawerContent, DrawerDescription, DrawerHeader, DrawerTitle, DrawerTrigger } from '@/components/ui/drawer';
import { FaChartLine } from 'react-icons/fa6';

type SensorCardProps = {
  title: string;
  subTitle?: string;
  value?: string | number;
  unit?: string;
  color?: string;
  icon?: React.ReactNode;
  info?: React.ReactNode;
  isLoading: boolean;
  chart?: React.ReactNode;
  chartTitle?: string;
  chartDescription?: string;
};

const SensorCard: React.FC<SensorCardProps> = ({ title, subTitle, value, unit, color, icon, info, isLoading, chartTitle, chartDescription, chart }) => {
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
          <div className='flex justify-between items-start'>
            <div>
              <div className='flex items-center gap-1'>
                <h3 className='text-lg font-semibold'>{title}</h3>
              </div>
              <p className='text-xs text-muted-foreground'>{subTitle}</p>
            </div>

            <Drawer>
              <DrawerTrigger>
                <div className='rounded-full p-2 d-flex justify-center items-center text-base text-primary hover:bg-primary/10 '>
                  <FaChartLine className='text-primary' />
                </div>
              </DrawerTrigger>
              <DrawerContent>
                <div className='mx-auto w-full max-w-3xl'>
                  <DrawerHeader>
                    <DrawerTitle>{chartTitle}</DrawerTitle>
                    <DrawerDescription>{chartDescription}</DrawerDescription>
                  </DrawerHeader>
                  <div className='py-8'>{chart}</div>
                </div>
              </DrawerContent>
            </Drawer>
          </div>
          <div className='flex justify-between items-center w-full'>
            <div className={`flex items-baseline gap-1 ${generateTextColor(color)}`}>
              <p className={`font-bold text-3xl`}>{isLoading ? '---' : roundedValue}</p>
              <p className='font-semibold'>{unit}</p>
            </div>

            <div>
              {valueExists && (
                <Popover>
                  <PopoverTrigger className='mt-2'>
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
      </div>
    </Card>
  );
};

export default SensorCard;
