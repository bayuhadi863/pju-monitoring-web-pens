import { FC } from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import nitrogenDioxideIcon from '@/assets/nitrogen-dioxide.png';
import { roundValue } from '@/lib/utils/roundValue';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Info } from 'lucide-react';
import { generateNitrogenDioxideBadge, nitrogenDioxide } from '@/lib/data/sensor-data/air-quality/nitrogen-dioxide';
import NitrogenDioxideChart from '../chart/nitrogen-dioxide-chart';

type NitrogenDioxideCardProps = {
    className?: string;
    isLoading: boolean;
    value?: number;
};

const NitrogenDioxideCard: FC<NitrogenDioxideCardProps> = ({ value, isLoading, className }) => {
    return (
        <Card className={className}>
            <CardHeader>
                <div className='flex items-start gap-2'>
                    <img
                        src={nitrogenDioxideIcon}
                        alt='App Logo'
                        className='w-6 mt-0'
                    />
                    <div className='flex gap-1 items-center flex-wrap'>
                        <h5 className='font-semibold'>Nitrogen Dioksida (NO2)</h5>
                        <Popover>
                            <PopoverTrigger>
                                <Info className='h-4 w-4 text-muted-foreground' />
                            </PopoverTrigger>

                            <PopoverContent>{nitrogenDioxide.info}</PopoverContent>
                        </Popover>
                    </div>
                </div>
            </CardHeader>

            <CardContent>
                <div className='flex flex-col justify-center items-center gap-2'>
                    <div className='flex items-start gap-1 justify-center'>
                        <h3 className='text-4xl font-semibold text-center'>{isLoading ? '--' : roundValue(value)}</h3>
                        <span className='font-semibold text-muted-foreground mt-1'>{nitrogenDioxide.unit}</span>
                    </div>
                    <div className='flex flex-col items-center gap-3'>{generateNitrogenDioxideBadge(isLoading ? undefined : value)}</div>
                </div>
                <div className='mt-2'>
                    <h4 className='mb-2 text-sm font-medium'>Trend</h4>
                    <NitrogenDioxideChart />
                </div>
            </CardContent>
        </Card>
    );
};

export default NitrogenDioxideCard;
