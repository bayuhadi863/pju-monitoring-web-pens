import { FC } from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import HumidityChart from '../chart/humidity-chart';
import { generateHumidityBadge, humidity, humidityGenerateBgColor } from '@/lib/data/sensor-data/weather/humidity';
import humidityIcon from '@/assets/humidity.png';
import { roundValue } from '@/lib/utils/roundValue';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Info } from 'lucide-react';
import ExportSensorDialog from '../dialog/export-sensor-dialog';

type HumidityCardProps = {
    className?: string;
    isLoading: boolean;
    value?: number;
};

const HumidityCard: FC<HumidityCardProps> = ({ value, isLoading, className }) => {
    return (
        <Card className={className}>
            <CardHeader>
                <div className='flex flex-col lg:flex-row justify-between gap-4'>
                    <div className='flex items-start gap-2'>
                        <img
                            src={humidityIcon}
                            alt='App Logo'
                            className='w-6 mt-0'
                        />
                        <div className='flex gap-1 items-center flex-wrap'>
                            <h5 className='font-semibold'>Kelembapan Udara</h5>
                            <Popover>
                                <PopoverTrigger>
                                    <Info className='h-4 w-4 text-muted-foreground' />
                                </PopoverTrigger>

                                <PopoverContent>{humidity.info}</PopoverContent>
                            </Popover>
                        </div>
                    </div>
                    <div className='flex justify-center'>
                        <ExportSensorDialog name={humidity.title} sensorTypeCode={humidity.sensorTypeCode} sensorType='weather'/>
                    </div>
                </div>

            </CardHeader>

            <CardContent>
                <div className='flex flex-col justify-center items-center gap-2'>
                    <div className='flex items-start gap-1 justify-center'>
                        <h3 className='text-4xl font-semibold text-center'>{isLoading ? '--' : roundValue(value)}</h3>
                        <span className='font-semibold text-muted-foreground mt-1'>{humidity.unit}</span>
                    </div>
                    <div className='flex flex-col items-center gap-3'>
                        <Progress
                            value={isLoading ? 0 : roundValue(value)}
                            className='w-36 h-2'
                            indicatorColor={humidityGenerateBgColor(isLoading ? undefined : value)}
                        />
                        {generateHumidityBadge(isLoading ? undefined : value)}
                    </div>
                </div>
                <div className='mt-2'>
                    <h4 className='mb-2 text-sm font-medium'>Trend</h4>
                    <HumidityChart />
                </div>
            </CardContent>
        </Card>
    );
};

export default HumidityCard;
