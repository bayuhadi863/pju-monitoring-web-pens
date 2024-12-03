import { IoIosWarning } from 'react-icons/io';
import { RiErrorWarningFill } from 'react-icons/ri';
import { GoCheckCircleFill } from 'react-icons/go';
import { SensorStaticData } from '@/lib/types/sensor-data-type';
import { ReactNode } from 'react';
import { Badge } from '@/components/ui/badge';

const solarSensorTypeCode = 'SOLAR';
const solarTitle = 'Radiasi Matahari';
const solarSubtitle = 'Tingkat Radiasi Matahari Area';
const solarUnit = 'W/m²';

export enum SolarCategory {
    GOOD = 'good',
    MODERATE = 'moderate',
    BAD = 'bad',
    UNKNOWN = 'unknown',
}

const solarGenerateColor = (value?: number) => {
    if (value === null || value === undefined) return 'blue';
    if (value >= 0 && value <= 400.99) return 'green';
    if (value >= 401 && value <= 600.99) return 'yellow';
    if (value >= 601) return 'red';
    return 'blue';
};

export const getSolarCategory = (value?: number): SolarCategory => {
    if (value === null || value === undefined) return SolarCategory.UNKNOWN;
    if (value >= 0 && value <= 400.99) return SolarCategory.GOOD;
    if (value >= 401 && value <= 600.99) return SolarCategory.MODERATE;
    if (value >= 601) return SolarCategory.BAD;
    return SolarCategory.UNKNOWN;
};

const solarGenerateIcon = (value?: number) => {
    if (value === null || value === undefined) return <div></div>;
    if (value >= 0 && value <= 400.99) return <GoCheckCircleFill className='text-green-600' />;
    if (value >= 401 && value <= 600.99) return <IoIosWarning className='text-yellow-400' />;
    if (value >= 601) return <RiErrorWarningFill className='text-red-600' />;
    return <div>halo</div>;
};

const solarInfo = (
    <div className='text-xs flex flex-col gap-1'>
        <p>Radiasi matahari adalah energi yang dipancarkan oleh matahari dalam bentuk gelombang elektromagnetik.</p>
        <p>
            Radiasi matahari <span className='text-green-600 font-semibold'>0 - 200 {solarUnit}</span> adalah Baik. Intensitas rendah dan tidak berbahaya.
        </p>
        <p>
            Radiasi matahari <span className='text-green-600 font-semibold'>201 - 400 {solarUnit}</span> adalah Cukup. Intensitas sedang, nyaman untuk aktivitas luar ruangan.
        </p>
        <p>
            Radiasi matahari <span className='text-yellow-400 font-semibold'>401 - 600 {solarUnit}</span> adalah Tinggi. Intensitas kuat, perlindungan dari sinar UV mulai diperlukan.
        </p>
        <p>
            Radiasi matahari <span className='text-red-600 font-semibold'>601 - 800 {solarUnit}</span> adalah Sangat Tinggi. Intensitas sangat tinggi, berisiko jika terpapar langsung tanpa perlindungan.
        </p>
        <p>
            Radiasi matahari <span className='text-red-600 font-semibold'> 800 {solarUnit}</span> adalah Berbahaya. Intensitas ekstrem, dapat menyebabkan kerusakan kulit, mata, atau perangkat.
        </p>
    </div>
);

export const generateSolarBadge = (value?: number): ReactNode => {
    if (value === null || value === undefined) return <div></div>;

    if (value > 800)
        return (
            <Badge
                variant='outline'
                className='text-red-600 text-sm'
            >
                Berbahaya
            </Badge>
        );

    if (value >= 601 && value <= 800)
        return (
            <Badge
                variant='outline'
                className='text-red-600 text-sm'
            >
                Sangat Tinggi
            </Badge>
        );

    if (value >= 401 && value <= 600)
        return (
            <Badge
                variant='outline'
                className='text-yellow-400 text-sm'
            >
                Tinggi
            </Badge>
        );

    if (value >= 201 && value <= 400)
        return (
            <Badge
                variant='outline'
                className='text-green-600 text-sm'
            >
                Cukup
            </Badge>
        );

    if (value >= 0 && value <= 200)
        return (
            <Badge
                variant='outline'
                className='text-green-600 text-sm'
            >
                Baik
            </Badge>
        );

    return <div></div>;
};

export const solar: SensorStaticData = {
    sensorTypeCode: solarSensorTypeCode,
    title: solarTitle,
    subtitle: solarSubtitle,
    unit: solarUnit,
    generateColor: solarGenerateColor,
    generateIcon: solarGenerateIcon,
    info: solarInfo,
};
