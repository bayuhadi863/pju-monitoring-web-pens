import { BsFillCloudRainFill, BsFillCloudRainHeavyFill, BsFillCloudLightningRainFill } from 'react-icons/bs';
import { SensorStaticData } from '@/lib/types/sensor-data-type';
import { ReactNode } from 'react';
import { Badge } from '@/components/ui/badge';

const rainfallSensorTypeCode = 'RAINFL';
const rainfallTitle = 'Curah Hujan';
const rainfallSubtitle = 'Tingkat Curah Hujan Area';
const rainfallUnit = 'mm';

const rainfallGenerateColor = (value?: number) => {
    if (value === null || value === undefined) return 'blue';
    if (value >= 0 && value <= 24.9) return 'green';
    if (value >= 25 && value <= 99.9) return 'yellow';
    if (value >= 100 && value <= 249.0) return 'red';
    return 'red';
};

export enum RainfallCategory {
    GOOD = 'good',
    MODERATE = 'moderate',
    BAD = 'bad',
    UNKNOWN = 'unknown',
}

export const getRainfallCategory = (value?: number): RainfallCategory => {
    if (value === null || value === undefined) return RainfallCategory.UNKNOWN;
    if (value >= 0 && value <= 24.9) return RainfallCategory.GOOD;
    if (value >= 25 && value <= 99.9) return RainfallCategory.MODERATE;
    if (value >= 100 && value <= 249.0) return RainfallCategory.BAD;
    return RainfallCategory.BAD;
};

const rainfallGenerateIcon = (value?: number) => {
    if (value === null || value === undefined) return <div></div>;
    if (value >= 0 && value <= 24.9) return <BsFillCloudRainHeavyFill className='text-green-600' />;
    if (value >= 25.0 && value <= 49.9) return <BsFillCloudRainFill className='text-yellow-400' />;
    if (value >= 50.0 && value <= 99.9) return <BsFillCloudLightningRainFill className='text-yellow-400' />;
    if (value >= 100 && value <= 249.0) return <BsFillCloudLightningRainFill className='text-red-600' />;
    return <BsFillCloudLightningRainFill className='text-red-600' />;
};

const rainfallInfo = (
    <div className='text-xs flex flex-col gap-1'>
        <p>Curah hujan adalah jumlah hujan yang jatuh dalam satu periode waktu tertentu.</p>
        <p>
            Curah hujan <span className='text-muted-foreground font-semibold'>0 mm atau kurang</span> adalah Tidak Hujan.
        </p>
        <p>
            Curah hujan <span className='text-green-600 font-semibold'>0,1 - 10,0 mm</span> adalah Hujan Ringan.
        </p>
        <p>
            Curah hujan <span className='text-green-600 font-semibold'>10,1 - 24,9 mm</span> adalah Hujan Sedang.
        </p>
        <p>
            Curah hujan <span className='text-yellow-400 font-semibold'>25,0 - 49,9 mm</span> adalah Hujan Lebat.
        </p>
        <p>
            Curah hujan <span className='text-yellow-400 font-semibold'>50,0 - 99,9 mm</span> adalah Hujan Badai.
        </p>
        <p>
            Curah hujan <span className='text-red-600 font-semibold'>100,0 - 249,9 mm</span> adalah Hujan Badai Lebat.
        </p>
        <p>
            Curah hujan <span className='text-red-600 font-semibold'>lebih dari 249,9 mm</span> adalah Hujan Ekstrem.
        </p>
    </div>
);

export const generateRainfallBadge = (value?: number): ReactNode => {
    if (value === null || value === undefined) return <div></div>;
    if (value <= 0)
        return (
            <Badge
                variant='outline'
                className='text-muted-foreground text-sm'
            >
                Tidak Hujan
            </Badge>
        );
    if (value > 0 && value <= 10)
        return (
            <Badge
                variant='outline'
                className='text-green-600 text-sm'
            >
                Hujan Ringan
            </Badge>
        );
    if (value > 10 && value <= 24.9)
        return (
            <Badge
                variant='outline'
                className='text-green-600 text-sm'
            >
                Hujan Sedang
            </Badge>
        );
    if (value >= 25 && value <= 49.9)
        return (
            <Badge
                variant='outline'
                className='text-yellow-400 text-sm'
            >
                Hujan Lebat
            </Badge>
        );
    if (value >= 50 && value <= 99.9)
        return (
            <Badge
                variant='outline'
                className='text-yellow-400 text-sm'
            >
                Hujan Badai
            </Badge>
        );
    if (value >= 100 && value <= 249.9)
        return (
            <Badge
                variant='outline'
                className='text-red-600 text-sm'
            >
                Hujan Badai Lebat
            </Badge>
        );
    if (value > 249.9)
        return (
            <Badge
                variant='outline'
                className='text-red-600 text-sm'
            >
                Hujan Ekstrem
            </Badge>
        );
    return <div></div>;
};

export const rainfall: SensorStaticData = {
    sensorTypeCode: rainfallSensorTypeCode,
    title: rainfallTitle,
    subtitle: rainfallSubtitle,
    unit: rainfallUnit,
    generateColor: rainfallGenerateColor,
    generateIcon: rainfallGenerateIcon,
    info: rainfallInfo,
};
