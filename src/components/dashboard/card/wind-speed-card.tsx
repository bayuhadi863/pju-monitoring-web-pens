import { FC } from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { roundValue } from '@/lib/utils/roundValue';
import windSpeedIcon from '@/assets/wind-speed.png';
import { generateWindSpeedBadge, windSpeed } from '@/lib/data/sensor-data/weather/wind-speed';
import WindSpeedChart from '../chart/wind-speed-chart';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Info } from 'lucide-react';

type WindSpeedCardProps = {
    className?: string;
    isLoading: boolean;
    value?: number;
};

const WindSpeedCard: FC<WindSpeedCardProps> = ({ value, isLoading, className }) => {
    return (
        <Card className={className}>
            <CardHeader>
                <div className='flex items-start gap-2'>
                    <img
                        src={windSpeedIcon}
                        alt='App Logo'
                        className='w-6 mt-0'
                    />
                    <div className='flex gap-1 items-center flex-wrap'>
                        <h5 className='font-semibold'>Kecepatan Angin</h5>
                        <Popover>
                            <PopoverTrigger>
                                <Info className='h-4 w-4 text-muted-foreground' />
                            </PopoverTrigger>

                            <PopoverContent>{windSpeed.info}</PopoverContent>
                        </Popover>
                    </div>
                </div>
            </CardHeader>

            <CardContent>
                <div className='flex flex-col justify-center items-center gap-2'>
                    <div className='flex items-start gap-1 justify-center'>
                        <h3 className='text-4xl font-semibold text-center'>{isLoading ? '--' : roundValue(value)}</h3>
                        <span className='font-semibold text-muted-foreground mt-1'>{windSpeed.unit}</span>
                    </div>
                    <div>{generateWindSpeedBadge(isLoading ? undefined : value)}</div>
                </div>
                <div className='mt-2'>
                    <h4 className='mb-2 text-sm font-medium'>Trend</h4>
                    <WindSpeedChart />
                </div>
            </CardContent>
        </Card>
    );
};

export default WindSpeedCard;
