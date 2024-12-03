import { IoIosWarning } from 'react-icons/io';
import { RiErrorWarningFill } from 'react-icons/ri';
import { GoCheckCircleFill } from 'react-icons/go';
import { SensorStaticData } from '@/lib/types/sensor-data-type';
import { Badge } from '@/components/ui/badge';
import { ReactNode } from 'react';

const humiditySensorTypeCode = 'HUM';
const humidityTitle = 'Kelembaban Udara';
const humiditySubtitle = 'Tingkat Kelembaban Udara Area';
const humidityUnit = '%';

const humidityGenerateColor = (value?: number) => {
    if (value === null || value === undefined) return 'blue';
    if (value >= 40 && value <= 60) return 'green';
    if ((value < 40 && value >= 20) || (value > 60 && value <= 80)) return 'yellow';
    return 'red';
};

export const humidityGenerateBgColor = (value?: number) => {
    if (value === null || value === undefined) return 'bg-primary';
    if (value >= 40 && value <= 60) return 'bg-green-600';
    if ((value < 40 && value >= 20) || (value > 60 && value <= 80)) return 'bg-yellow-400';
    return 'bg-red-600';
};

const humidityGenerateIcon = (value?: number) => {
    if (value === null || value === undefined) return <div></div>;
    if (value >= 40 && value <= 60) return <GoCheckCircleFill className='text-green-600' />;
    if ((value < 40 && value >= 20) || (value > 60 && value <= 80)) return <IoIosWarning className='text-yellow-400' />;
    return <RiErrorWarningFill className='text-red-600' />;
};

const humidityInfo = (
    <div className='text-xs flex flex-col gap-1'>
        <p>Kelembaban udara adalah jumlah uap air yang terkandung dalam udara.</p>
        <p>
            Kelembaban udara yang ideal untuk kesehatan manusia adalah antara <span className='text-green-600 font-semibold'>40% - 60%</span>.
        </p>
        <p>Kelembaban udara yang terlalu rendah atau terlalu tinggi dapat menyebabkan masalah kesehatan dan kerusakan pada barang.</p>
    </div>
);

export const generateHumidityBadge = (value?: number): ReactNode => {
    if (value === null || value === undefined) return <div></div>;
    if (value >= 40 && value <= 60)
        return (
            <Badge
                variant='outline'
                className='text-green-600 text-sm'
            >
                Optimal
            </Badge>
        );
    if (value < 40 && value >= 20)
        return (
            <Badge
                variant='outline'
                className='text-yellow-400 text-sm'
            >
                Rendah
            </Badge>
        );
    if (value > 60 && value <= 80)
        return (
            <Badge
                variant='outline'
                className='text-yellow-400 text-sm'
            >
                Tinggi
            </Badge>
        );
    if (value < 20)
        return (
            <Badge
                variant='outline'
                className='text-red-600 text-sm'
            >
                Sangat Rendah
            </Badge>
        );
    if (value > 80)
        return (
            <Badge
                variant='outline'
                className='text-red-600 text-sm'
            >
                Sangat Tinggi
            </Badge>
        );
    return <div></div>;
};

export const getHumidityMessage = (value?: number): string => {
    if (value === null || value === undefined) return '';
    if (value >= 40 && value <= 60) return 'Kelembapan udara berada pada tingkat optimal, baik untuk kenyamanan dan kesehatan.';
    if (value < 40 && value >= 20) return 'Kelembapan udara rendah. Disarankan menggunakan pelembap udara untuk menjaga kelembapan ruangan.';
    if (value > 60 && value <= 80) return 'Kelembapan udara tinggi. Pastikan sirkulasi udara di ruangan berjalan baik untuk mencegah pengap.';
    if (value < 20) return 'Kelembapan udara sangat rendah. Ini dapat menyebabkan iritasi kulit dan masalah pernapasan. Gunakan pelembap udara.';
    if (value > 80) return 'Kelembapan udara sangat tinggi. Kondisi ini berisiko menyebabkan jamur atau bakteri berkembang. Tingkatkan ventilasi udara.';
    return '';
};

export const humidity: SensorStaticData = {
    sensorTypeCode: humiditySensorTypeCode,
    title: humidityTitle,
    subtitle: humiditySubtitle,
    unit: humidityUnit,
    generateColor: humidityGenerateColor,
    generateIcon: humidityGenerateIcon,
    info: humidityInfo,
};
