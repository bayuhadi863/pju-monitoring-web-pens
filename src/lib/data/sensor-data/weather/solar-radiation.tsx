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

const solarGenerateColor = (value?: number) => {
    if (value === null || value === undefined) return 'blue';
    if (value >= 600) return 'green';
    if (value >= 400 && value <= 599.99) return 'yellow';
    if (value >= 0 && value <= 399.99) return 'red';
    return 'blue';
};

const solarGenerateIcon = (value?: number) => {
    if (value === null || value === undefined) return <div></div>;
    if (value >= 600) return <GoCheckCircleFill className='text-green-600' />;
    if (value >= 400 && value <= 599.99) return <IoIosWarning className='text-yellow-400' />;
    if (value >= 0 && value <= 399.99) return <RiErrorWarningFill className='text-red-600' />;
    return <div>halo</div>;
};

const solarInfo = (
    <div className='text-xs flex flex-col gap-1'>
        <p>Radiasi matahari adalah energi yang dipancarkan oleh matahari dalam bentuk gelombang elektromagnetik.</p>
        <p>
            Radiasi matahari <span className='text-red-600 font-semibold'>0 - 49 {solarUnit}</span> adalah Buruk.
        </p>
        <p>
            Radiasi matahari <span className='text-red-600 font-semibold'>50 - 199 {solarUnit}</span> adalah Sangat Rendah.
        </p>
        <p>
            Radiasi matahari <span className='text-red-600 font-semibold'>200 - 399 {solarUnit}</span> adalah Rendah.
        </p>
        <p>
            Radiasi matahari <span className='text-yellow-400 font-semibold'>400 - 599 {solarUnit}</span> adalah Sedang.
        </p>
        <p>
            Radiasi matahari <span className='text-green-600 font-semibold'>600 - 799 {solarUnit}</span> adalah Baik.
        </p>
        <p>
            Radiasi matahari <span className='text-green-600 font-semibold'>800 - 1000+ {solarUnit}</span> adalah Sangat Baik.
        </p>
    </div>
);

export const generateSolarBadge = (value?: number): ReactNode => {
    if (value === null || value === undefined) return <div></div>;
    if (value >= 800)
        return (
            <Badge
                variant='outline'
                className='text-green-600 text-sm'
            >
                Sangat Baik
            </Badge>
        );
    if (value >= 600 && value <= 799)
        return (
            <Badge
                variant='outline'
                className='text-green-600 text-sm'
            >
                Baik
            </Badge>
        );
    if (value >= 400 && value <= 599)
        return (
            <Badge
                variant='outline'
                className='text-yellow-400 text-sm'
            >
                Sedang
            </Badge>
        );
    if (value >= 200 && value <= 399)
        return (
            <Badge
                variant='outline'
                className='text-red-600 text-sm'
            >
                Rendah
            </Badge>
        );
    if (value >= 50 && value <= 199)
        return (
            <Badge
                variant='outline'
                className='text-red-600 text-sm'
            >
                Sangat Rendah
            </Badge>
        );
    if (value >= 0 && value <= 49)
        return (
            <Badge
                variant='outline'
                className='text-red-600 text-sm'
            >
                Buruk
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
