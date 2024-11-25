import { IoIosWarning } from 'react-icons/io';
import { RiErrorWarningFill } from 'react-icons/ri';
import { GoCheckCircleFill } from 'react-icons/go';
import { SensorStaticData } from '@/lib/types/sensor-data-type';
import { ReactNode } from 'react';
import { Badge } from '@/components/ui/badge';

const airPressureSensorTypeCode = 'PRESS';
const airPressureTitle = 'Tekanan Udara';
const airPressureSubtitle = 'Tingkat Tekanan Udara Area';
const airPressureUnit = 'mbar';

const airPressureGenerateColor = (value?: number) => {
    if (value === null || value === undefined) return 'blue';
    if (value >= 1005 && value <= 1025) return 'green';
    if (value >= 995 && value <= 1004.99) return 'yellow';
    if (value < 994.99) return 'red';
    return 'blue';
};

const airPressureGenerateIcon = (value?: number) => {
    if (value === null || value === undefined) return <div></div>;
    if (value >= 1005 && value <= 1025) return <GoCheckCircleFill className='text-green-600' />;
    if (value >= 995 && value <= 1004.99) return <IoIosWarning className='text-yellow-400' />;
    if (value < 994.99) return <RiErrorWarningFill className='text-red-600' />;
    return <div>halo</div>;
};

const airPressureInfo = (
    <div className='text-xs flex flex-col gap-1'>
        <p>Tekanan udara adalah gaya yang diberikan oleh udara di atmosfer terhadap permukaan bumi, yang dipengaruhi oleh ketinggian dan kondisi cuaca.</p>
        <p>
            Tekanan udara <span className='text-red-600 font-semibold'>kurang dari 960 {airPressureUnit}</span> adalah Ekstrem.
        </p>
        <p>
            Tekanan udara <span className='text-red-600 font-semibold'>960 - 979 {airPressureUnit}</span> adalah Sangat Rendah.
        </p>
        <p>
            Tekanan udara <span className='text-red-600 font-semibold'>980 - 994 {airPressureUnit}</span> adalah Rendah.
        </p>
        <p>
            Tekanan udara <span className='text-yellow-400 font-semibold'>995 - 1004 {airPressureUnit}</span> adalah Sedang.
        </p>
        <p>
            Tekanan udara <span className='text-green-600 font-semibold'>1005 - 1012 {airPressureUnit}</span> adalah Baik.
        </p>
        <p>
            Tekanan udara <span className='text-green-600 font-semibold'>1013 - 1025 {airPressureUnit}</span> adalah Sangat Baik.
        </p>
    </div>
);

export const generateAirPressureBadge = (value?: number): ReactNode => {
    if (value === null || value === undefined) return <div></div>;
    if (value > 1012 && value <= 1025)
        return (
            <Badge
                variant='outline'
                className='text-green-600 text-sm'
            >
                Sangat Baik
            </Badge>
        );
    if (value >= 1005 && value <= 1012)
        return (
            <Badge
                variant='outline'
                className='text-green-600 text-sm'
            >
                Baik
            </Badge>
        );
    if (value >= 995 && value <= 1004)
        return (
            <Badge
                variant='outline'
                className='text-yellow-400 text-sm'
            >
                Sedang
            </Badge>
        );
    if (value >= 980 && value <= 994)
        return (
            <Badge
                variant='outline'
                className='text-red-600 text-sm'
            >
                Rendah
            </Badge>
        );
    if (value >= 960 && value <= 979)
        return (
            <Badge
                variant='outline'
                className='text-red-600 text-sm'
            >
                Sangat Rendah
            </Badge>
        );
    if (value < 960)
        return (
            <Badge
                variant='outline'
                className='text-red-600 text-sm'
            >
                Ekstrem
            </Badge>
        );
    return <div></div>;
};

export const airPressure: SensorStaticData = {
    sensorTypeCode: airPressureSensorTypeCode,
    title: airPressureTitle,
    subtitle: airPressureSubtitle,
    unit: airPressureUnit,
    generateColor: airPressureGenerateColor,
    generateIcon: airPressureGenerateIcon,
    info: airPressureInfo,
};
