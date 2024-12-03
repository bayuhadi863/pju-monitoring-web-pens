// icons import
import { TbTemperatureSnow, TbTemperatureSun } from 'react-icons/tb';
import { SensorStaticData } from '@/lib/types/sensor-data-type';
import { ReactNode } from 'react';
import { Badge } from '@/components/ui/badge';

const temperatureSensorTypeCode = 'TEMP';
const temperatureTitle = 'Suhu';
const temperatureSubtitle = 'Suhu Area';
const temperatureUnit = '°C';

const temperatureGenerateColor = (value?: number) => {
    if (value === null || value === undefined) return 'blue';
    if (value < 20) return 'blue';
    if (value >= 20 && value <= 25) return 'green';
    if (value > 25 && value <= 35) return 'yellow';
    return 'red';
};

export enum TemperatureCategory {
    GOOD = 'good',
    MODERATE = 'moderate',
    BAD = 'bad',
    UNKNOWN = 'unknown',
}

export const getTemperatureCategory = (value?: number): TemperatureCategory => {
    if (value === null || value === undefined) return TemperatureCategory.UNKNOWN;
    if (value >= 20 && value <= 25) return TemperatureCategory.GOOD;
    if (value > 25 && value <= 35) return TemperatureCategory.MODERATE;
    if (value < 20) return TemperatureCategory.MODERATE;
    if (value > 35) return TemperatureCategory.BAD;
    return TemperatureCategory.UNKNOWN;
};

const temperatureGenerateIcon = (value?: number) => {
    if (value === null || value === undefined) return <div></div>;
    if (value < 20) return <TbTemperatureSnow className='text-primary' />;
    if (value >= 20 && value <= 25) return <TbTemperatureSun className='text-green-600' />;
    if (value > 25 && value <= 35) return <TbTemperatureSun className='text-yellow-400' />;
    return <TbTemperatureSun className='text-red-600' />;
};

const temperatureInfo = (
    <div className='text-xs flex flex-col gap-1'>
        <p>Suhu adalah ukuran rata-rata energi kinetik partikel dalam suatu benda.</p>
        <p>
            Suhu yang ideal untuk kesehatan manusia adalah antara <span className='text-green-600 font-semibold'>20°C - 25°C</span>.
        </p>
        <p>Suhu yang terlalu rendah atau terlalu tinggi dapat menyebabkan masalah kesehatan.</p>
    </div>
);

export const generateTemperatureBadge = (value?: number): ReactNode => {
    if (value === null || value === undefined) return <div></div>;
    if (value >= 20 && value <= 25)
        return (
            <Badge
                variant='outline'
                className='text-green-600 text-sm'
            >
                Optimal
            </Badge>
        );
    if (value > 25 && value <= 35)
        return (
            <Badge
                variant='outline'
                className='text-yellow-400 text-sm'
            >
                Hangat
            </Badge>
        );
    if (value < 20)
        return (
            <Badge
                variant='outline'
                className='text-blue-600 text-sm'
            >
                Dingin
            </Badge>
        );
    if (value > 35)
        return (
            <Badge
                variant='outline'
                className='text-red-600 text-sm'
            >
                Panas
            </Badge>
        );
    return <div></div>;
};

export const temperature: SensorStaticData = {
    sensorTypeCode: temperatureSensorTypeCode,
    title: temperatureTitle,
    subtitle: temperatureSubtitle,
    unit: temperatureUnit,
    generateColor: temperatureGenerateColor,
    generateIcon: temperatureGenerateIcon,
    info: temperatureInfo,
};
