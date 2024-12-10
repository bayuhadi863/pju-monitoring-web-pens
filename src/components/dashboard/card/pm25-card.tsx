import { FC } from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import pm25Icon from '@/assets/particulate-matter-25.png';
import { roundValue } from '@/lib/utils/roundValue';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Info } from 'lucide-react';
import { generatePM25Badge, particulateMatter25 } from '@/lib/data/sensor-data/air-quality/particulate-matter-25';
import PM25Chart from '../chart/pm25-chart';
import ExportSensorDialog from '../dialog/export-sensor-dialog';

type PM25CardProps = {
    className?: string;
    isLoading: boolean;
    value?: number;
};

const PM25Card: FC<PM25CardProps> = ({ value, isLoading, className }) => {
    return (
        <Card className={className}>
            <CardHeader>
                <div className='flex flex-col lg:flex-row justify-between gap-4'>
                    <div className='flex items-start gap-2'>
                        <img
                            src={pm25Icon}
                            alt='App Logo'
                            className='w-6 mt-0'
                        />
                        <div className='flex gap-1 items-center flex-wrap'>
                            <h5 className='font-semibold'>Partikulat Materi 2.5</h5>
                            <Popover>
                                <PopoverTrigger>
                                    <Info className='h-4 w-4 text-muted-foreground' />
                                </PopoverTrigger>

                                <PopoverContent>{particulateMatter25.info}</PopoverContent>
                            </Popover>
                        </div>
                    </div>
                    <div className='flex justify-center'>
                        <ExportSensorDialog name={particulateMatter25.title} sensorTypeCode={particulateMatter25.sensorTypeCode} sensorType='air-quality' />
                    </div>
                </div>
            </CardHeader>

            <CardContent>
                <div className='flex flex-col justify-center items-center gap-2'>
                    <div className='flex items-start gap-1 justify-center'>
                        <h3 className='text-4xl font-semibold text-center'>{isLoading ? '--' : roundValue(value)}</h3>
                        <span className='font-semibold text-muted-foreground mt-1'>{particulateMatter25.unit}</span>
                    </div>
                    <div className='flex flex-col items-center gap-3'>{generatePM25Badge(isLoading ? undefined : value)}</div>
                </div>
                <div className='mt-2'>
                    <h4 className='mb-2 text-sm font-medium'>Trend</h4>
                    <PM25Chart />
                </div>
            </CardContent>
        </Card>
    );
};

export default PM25Card;
