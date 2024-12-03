// icons import
import { IoIosWarning } from 'react-icons/io';
import { RiErrorWarningFill } from 'react-icons/ri';
import { GoCheckCircleFill } from 'react-icons/go';
import { SensorStaticData } from '@/lib/types/sensor-data-type';
import { ReactNode } from 'react';
import { Badge } from '@/components/ui/badge';

const ozoneSensorTypeCode = 'O3';
const ozoneTitle = 'Gas Ozon';
const ozoneSubtitle = 'Kadar Gas Ozon (O3) Area';
const ozoneUnit = 'ppm';

const ozoneGenerateColor = (value?: number) => {
    if (value === null || value === undefined) return 'blue';
    if (value < 0.01) return 'green';
    if (value >= 0.01 && value <= 0.1) return 'yellow';
    if (value >= 0.101) return 'red';
    return 'blue';
};

export const ozoneGenerateBgColor = (value?: number) => {
    if (value === null || value === undefined) return 'bg-blue-600';
    if (value < 0.01) return 'bg-green-600';
    if (value >= 0.01 && value <= 0.1) return 'bg-yellow-400';
    if (value >= 0.101) return 'bg-red-600';
    return 'bg-blue-600';
};

const ozoneGenerateIcon = (value?: number) => {
    if (value === null || value === undefined) return <div></div>;
    if (value < 0.01) return <GoCheckCircleFill className='text-green-600' />;
    if (value >= 0.01 && value <= 0.1) return <IoIosWarning className='text-yellow-400' />;
    if (value >= 0.101) return <RiErrorWarningFill className='text-red-600' />;
    return <div></div>;
};

export const ozoneMaxValue = 0.5;

const ozoneInfo = (
    <div className='text-xs flex flex-col gap-1'>
        <p>Gas ozon (O₃) adalah bentuk triatomik dari oksigen yang berada di atmosfer dan berfungsi sebagai pelindung dari radiasi ultraviolet matahari, namun pada konsentrasi tinggi dapat menyebabkan masalah kesehatan dan polusi udara.</p>
        <p>
            Gas ozon <span className='text-red-600 font-semibold'>lebih dari 0.3 {ozoneUnit}</span> adalah Berbahaya.
        </p>
        <p>
            Gas ozon <span className='text-red-600 font-semibold'>0.2 - 0.3 {ozoneUnit}</span> adalah Sangat Tidak Sehat.
        </p>
        <p>
            Gas ozon <span className='text-red-600 font-semibold'>0.1 - 0.2 {ozoneUnit}</span> adalah Tidak Sehat.
        </p>
        <p>
            Gas ozon <span className='text-yellow-400 font-semibold'>0.05 - 0.1 {ozoneUnit}</span> adalah Tidak Sehat bagi Sensitif.
        </p>
        <p>
            Gas ozon <span className='text-yellow-400 font-semibold'>0.01 - 0.05 {ozoneUnit}</span> adalah Sedikit Tercemar.
        </p>
        <p>
            Gas ozon <span className='text-green-600 font-semibold'>kurang dari 0.01 {ozoneUnit}</span> adalah Normal/Baik.
        </p>
    </div>
);

export const generateOzoneBadge = (value?: number): ReactNode => {
    if (value === null || value === undefined) return <div></div>;

    if (value > 0.3)
        return (
            <Badge
                variant='outline'
                className='text-red-600 text-sm'
            >
                Berbahaya
            </Badge>
        );
    if (value >= 0.2 && value <= 0.3)
        return (
            <Badge
                variant='outline'
                className='text-red-600 text-sm'
            >
                Sangat Tidak Sehat
            </Badge>
        );
    if (value >= 0.1 && value < 0.2)
        return (
            <Badge
                variant='outline'
                className='text-red-600 text-sm'
            >
                Tidak Sehat
            </Badge>
        );
    if (value >= 0.05 && value < 0.1)
        return (
            <Badge
                variant='outline'
                className='text-yellow-400 text-sm'
            >
                Tidak Sehat bagi Sensitif
            </Badge>
        );
    if (value >= 0.01 && value < 0.05)
        return (
            <Badge
                variant='outline'
                className='text-yellow-400 text-sm'
            >
                Sedikit Tercemar
            </Badge>
        );
    if (value < 0.01)
        return (
            <Badge
                variant='outline'
                className='text-green-600 text-sm'
            >
                Normal/Baik
            </Badge>
        );

    return <div></div>;
};

export const ozone: SensorStaticData = {
    sensorTypeCode: ozoneSensorTypeCode,
    title: ozoneTitle,
    subtitle: ozoneSubtitle,
    unit: ozoneUnit,
    generateColor: ozoneGenerateColor,
    generateIcon: ozoneGenerateIcon,
    info: ozoneInfo,
};
