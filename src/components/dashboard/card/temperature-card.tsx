import { FC } from 'react';
import temperatureIcon from '@/assets/temperature.png';
import { generateTemperatureBadge, temperature } from '@/lib/data/sensor-data/weather/temperature';
import TemperatureChart from '../chart/temperature-chart';
import { Info } from 'lucide-react';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';

type TemperatureCardProps = {
    className?: string;
    isLoading: boolean;
    value?: number;
};

const TemperatureCard: FC<TemperatureCardProps> = ({ className, isLoading, value }) => {
    const roundValue = (value?: number) => {
        return Math.round(Number(value) * 10) / 10;
    };

    const formatDate = (date: Date) => {
        return new Intl.DateTimeFormat('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric',
        }).format(date);
    };

    return (
        <div className={className}>
            <div className='flex justify-center mb-2'>
                <img
                    src={temperatureIcon}
                    alt='Logo'
                    className='w-14 h-14'
                />
            </div>
            <div>
                <div className='flex items-start gap-2 justify-center'>
                    <h3 className='text-7xl font-semibold text-center mb-1'>{isLoading ? '--' : roundValue(value)}</h3>
                    <span className='font-semibold text-muted-foreground mt-2'>{temperature.unit}</span>
                </div>
                <div className='flex gap-2 items-center mb-2 justify-center'>
                    <p className='text-muted-foreground text-center'>Suhu Udara</p>
                    <Popover>
                        <PopoverTrigger>
                            <Info className='h-4 w-4' />
                        </PopoverTrigger>

                        <PopoverContent>{temperature.info}</PopoverContent>
                    </Popover>
                </div>
                <div className='text-center'>{generateTemperatureBadge(isLoading ? undefined : value)}</div>
            </div>
            <div className='mt-6'>
                <h4 className='mb-2 text-sm font-medium'>Trend Suhu hari ini, {formatDate(new Date())}</h4>
                <TemperatureChart />
            </div>
        </div>
    );
};

export default TemperatureCard;
