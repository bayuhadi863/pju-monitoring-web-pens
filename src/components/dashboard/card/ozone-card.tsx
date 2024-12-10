import { FC } from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import ozoneIcon from '@/assets/ozone.png';
import { roundValue } from '@/lib/utils/roundValue';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Info } from 'lucide-react';
import { generateOzoneBadge, ozone } from '@/lib/data/sensor-data/air-quality/ozone';
import OzoneChart from '../chart/ozone';
import ExportSensorDialog from '../dialog/export-sensor-dialog';

type OzoneCardProps = {
    className?: string;
    isLoading: boolean;
    value?: number;
};

const OzoneCard: FC<OzoneCardProps> = ({ value, isLoading, className }) => {
    return (
        <Card className={className}>
            <CardHeader>
                <div className='flex flex-col lg:flex-row justify-between gap-4'>
                    <div className='flex items-start gap-2'>
                        <img
                            src={ozoneIcon}
                            alt='App Logo'
                            className='w-6 mt-0'
                        />
                        <div className='flex gap-1 items-center flex-wrap'>
                            <h5 className='font-semibold'>Gas Ozone (O3)</h5>
                            <Popover>
                                <PopoverTrigger>
                                    <Info className='h-4 w-4 text-muted-foreground' />
                                </PopoverTrigger>

                                <PopoverContent>{ozone.info}</PopoverContent>
                            </Popover>
                        </div>
                    </div>
                    <div className='flex justify-center'>
                        <ExportSensorDialog name={ozone.title} sensorTypeCode={ozone.sensorTypeCode} sensorType='air-quality' />
                    </div>
                </div>
            </CardHeader>

            <CardContent>
                <div className='flex flex-col justify-center items-center gap-2'>
                    <div className='flex items-start gap-1 justify-center'>
                        <h3 className='text-4xl font-semibold text-center'>{isLoading ? '--' : roundValue(value)}</h3>
                        <span className='font-semibold text-muted-foreground mt-1'>{ozone.unit}</span>
                    </div>
                    <div className='flex flex-col items-center gap-3'>{generateOzoneBadge(isLoading ? undefined : value)}</div>
                </div>
                <div className='mt-2'>
                    <h4 className='mb-2 text-sm font-medium'>Trend</h4>
                    <OzoneChart />
                </div>
            </CardContent>
        </Card>
    );
};

export default OzoneCard;
