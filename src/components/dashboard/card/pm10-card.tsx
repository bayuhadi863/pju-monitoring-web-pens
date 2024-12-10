import { FC } from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import pm10Icon from '@/assets/particulate-matter-10.png';
import { roundValue } from '@/lib/utils/roundValue';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Info } from 'lucide-react';
import { generatePM10Badge, particulateMatter10 } from '@/lib/data/sensor-data/air-quality/particulate-matter-10';
import PM10Chart from '../chart/pm10-chart';
import ExportSensorDialog from '../dialog/export-sensor-dialog';

type PM10CardProps = {
    className?: string;
    isLoading: boolean;
    value?: number;
};

const PM10Card: FC<PM10CardProps> = ({ value, isLoading, className }) => {
    return (
        <Card className={className}>
            <CardHeader>
                <div className='flex flex-col lg:flex-row justify-between gap-4'>
                    <div className='flex items-start gap-2'>
                        <img
                            src={pm10Icon}
                            alt='App Logo'
                            className='w-6 mt-0'
                        />
                        <div className='flex gap-1 items-center flex-wrap'>
                            <h5 className='font-semibold'>Partikulat Materi 10</h5>
                            <Popover>
                                <PopoverTrigger>
                                    <Info className='h-4 w-4 text-muted-foreground' />
                                </PopoverTrigger>

                                <PopoverContent>{particulateMatter10.info}</PopoverContent>
                            </Popover>
                        </div>
                    </div>
                    <div className='flex justify-center'>
                        <ExportSensorDialog name={particulateMatter10.title} sensorTypeCode={particulateMatter10.sensorTypeCode} sensorType='air-quality' />
                    </div>
                </div>
            </CardHeader>

            <CardContent>
                <div className='flex flex-col justify-center items-center gap-2'>
                    <div className='flex items-start gap-1 justify-center'>
                        <h3 className='text-4xl font-semibold text-center'>{isLoading ? '--' : roundValue(value)}</h3>
                        <span className='font-semibold text-muted-foreground mt-1'>{particulateMatter10.unit}</span>
                    </div>
                    <div className='flex flex-col items-center gap-3'>{generatePM10Badge(isLoading ? undefined : value)}</div>
                </div>
                <div className='mt-2'>
                    <h4 className='mb-2 text-sm font-medium'>Trend</h4>
                    <PM10Chart />
                </div>
            </CardContent>
        </Card>
    );
};

export default PM10Card;
