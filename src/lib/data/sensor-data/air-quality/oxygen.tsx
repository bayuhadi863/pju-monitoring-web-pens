// icons import
import { IoIosWarning } from 'react-icons/io';
import { RiErrorWarningFill } from 'react-icons/ri';
import { GoCheckCircleFill } from 'react-icons/go';
import { SensorStaticData } from '@/lib/types/sensor-data-type';
import { ReactNode } from 'react';
import { Badge } from '@/components/ui/badge';

const oxygenSensorTypeCode = 'O2';
const oxygenTitle = 'Oksigen';
const oxygenSubtitle = 'Kadar Oksigen (O₂) Area';
const oxygenUnit = '%VOL';

const oxygenGenerateColor = (value?: number) => {
    if (value === null || value === undefined) return 'blue';
    if (value >= 20.9) return 'green';
    if (value >= 18 && value <= 20.899) return 'yellow';
    if (value <= 17.999) return 'red';
    return 'blue';
};

export const oxygenGenerateBgColor = (value?: number) => {
    if (value === null || value === undefined) return 'bg-blue-600';
    if (value >= 20.9) return 'bg-green-600';
    if (value >= 18 && value <= 20.899) return 'bg-yellow-400';
    if (value <= 17.999) return 'bg-red-600';
    return 'bg-blue-600';
};

const oxygenGenerateIcon = (value?: number) => {
    if (value === null || value === undefined) return <div></div>;
    if (value >= 20.9) return <GoCheckCircleFill className='text-green-600' />;
    if (value >= 18 && value <= 20.899) return <IoIosWarning className='text-yellow-400' />;
    if (value <= 17.999) return <RiErrorWarningFill className='text-red-600' />;
    return <div></div>;
};

export const oxygenMaxValue = 25;

const oxygenInfo = (
    <div className='text-xs flex flex-col gap-1'>
        <p>Oksigen (O₂) adalah gas yang tidak berwarna dan tidak berbau yang esensial untuk respirasi makhluk hidup dan proses pembakaran.</p>
        <p>
            Oksigen <span className='text-red-600 font-semibold'>kurang dari 10 {oxygenUnit}</span> adalah Kritis.
        </p>
        <p>
            Oksigen <span className='text-red-600 font-semibold'>10 - 15.9 {oxygenUnit}</span> adalah Berbahaya.
        </p>
        <p>
            Oksigen <span className='text-red-600 font-semibold'>16 - 17.9 {oxygenUnit}</span> adalah Rendah.
        </p>
        <p>
            Oksigen <span className='text-yellow-400 font-semibold'>18 - 20.8 {oxygenUnit}</span> adalah Sedikit Kurang.
        </p>
        <p>
            Oksigen <span className='text-green-600 font-semibold'>20.9 - 21 {oxygenUnit}</span> adalah Normal.
        </p>
        <p>
            Oksigen <span className='text-green-600 font-semibold'>lebih dari 21 {oxygenUnit}</span> adalah Sangat Baik.
        </p>
    </div>
);

export const generateOxygenBadge = (value?: number): ReactNode => {
    if (value === null || value === undefined) return <div></div>;

    if (value < 10)
        return (
            <Badge
                variant='outline'
                className='text-red-600 text-sm'
            >
                Kritis
            </Badge>
        );
    if (value >= 10 && value <= 15.9)
        return (
            <Badge
                variant='outline'
                className='text-red-600 text-sm'
            >
                Berbahaya
            </Badge>
        );
    if (value >= 16 && value <= 17.9)
        return (
            <Badge
                variant='outline'
                className='text-red-600 text-sm'
            >
                Rendah
            </Badge>
        );
    if (value >= 18 && value <= 20.8)
        return (
            <Badge
                variant='outline'
                className='text-yellow-400 text-sm'
            >
                Sedikit Kurang
            </Badge>
        );
    if (value >= 20.9 && value <= 21)
        return (
            <Badge
                variant='outline'
                className='text-green-600 text-sm'
            >
                Normal
            </Badge>
        );
    if (value > 21)
        return (
            <Badge
                variant='outline'
                className='text-green-600 text-sm'
            >
                Sangat Baik
            </Badge>
        );

    return <div></div>;
};

export const oxygen: SensorStaticData = {
    sensorTypeCode: oxygenSensorTypeCode,
    title: oxygenTitle,
    subtitle: oxygenSubtitle,
    unit: oxygenUnit,
    generateColor: oxygenGenerateColor,
    generateIcon: oxygenGenerateIcon,
    info: oxygenInfo,
};
