import { FC } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { roundValue } from '@/lib/utils/roundValue';
import windDirectionIcon from '@/assets/wind-direction.png';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Info } from 'lucide-react';
import { generateWindDirectionBadge, windDirection } from '@/lib/data/sensor-data/weather/wind-direction';
import Compass from '../other/Compass';
import ExportSensorDialog from '../dialog/export-sensor-dialog';

type WindDirectionCardProps = {
    className?: string;
    isLoading: boolean;
    value?: number;
};

const WindDirectionCard: FC<WindDirectionCardProps> = ({ value, isLoading, className }) => {
    return (
        <Card className={className}>
            <CardContent className='mt-5 flex flex-col gap-4'>
                <div className='flex flex-col lg:flex-row justify-between gap-4'>
                    <div className='flex items-start gap-2 flex-wrap'>
                        <img
                            src={windDirectionIcon}
                            alt='App Logo'
                            className='w-6 mt-0'
                        />
                        <div className='flex gap-1 items-center flex-wrap'>
                            <h5 className='font-semibold'>Arah Angin</h5>
                            <Popover>
                                <PopoverTrigger>
                                    <Info className='h-4 w-4 text-muted-foreground' />
                                </PopoverTrigger>

                                <PopoverContent>{windDirection.info}</PopoverContent>
                            </Popover>
                        </div>
                    </div>
                    <div className='flex justify-center'>
                        <ExportSensorDialog name={windDirection.title} sensorTypeCode={windDirection.sensorTypeCode} sensorType='weather' />
                    </div>
                </div>

                <div className='flex flex-col lg:flex-row gap-2'>
                    <div className='lg:basis-1/2'>
                        <div className='flex flex-col justify-center items-center gap-2 h-full'>
                            <div className='flex items-start gap-1 justify-center'>
                                <h3 className='text-4xl font-semibold text-center'>{isLoading ? '--' : roundValue(value)}</h3>
                                <span className='font-semibold text-muted-foreground mt-1'>{windDirection.unit}</span>
                            </div>
                            <div>{generateWindDirectionBadge(isLoading ? undefined : value)}</div>
                        </div>
                    </div>
                    <div className='lg:basis-1/2 flex justify-center'>{isLoading ? <p className='text-xs text-muted-foreground'>Loading...</p> : <Compass direction={value || 0} />}</div>
                </div>
            </CardContent>
        </Card>
    );
};

export default WindDirectionCard;
