// icons import
import { IoIosWarning } from 'react-icons/io';
import { RiErrorWarningFill } from 'react-icons/ri';
import { GoCheckCircleFill } from 'react-icons/go';
import { SensorStaticData } from '@/lib/types/sensor-data-type';
import { ReactNode } from 'react';
import { Badge } from '@/components/ui/badge';

const particulateMatter25SensorTypeCode = 'PM2.5';
const particulateMatter25Title = 'Partikulat Materi 2.5';
const particulateMatter25Subtitle = 'artikulat Materi 2.5 Udara Area';
const particulateMatter25Unit = 'µg/m³';

const particulateMatter25GenerateColor = (value?: number) => {
    if (value === null || value === undefined) return 'blue';
    if (value <= 12.999) return 'green';
    if (value >= 13 && value <= 55.999) return 'yellow';
    if (value >= 56) return 'red';
    return 'blue';
};

export const particulateMatter25GenerateBgColor = (value?: number) => {
    if (value === null || value === undefined) return 'bg-blue-600';
    if (value <= 12.999) return 'bg-green-600';
    if (value >= 13 && value <= 55.999) return 'bg-yellow-400';
    if (value >= 56) return 'bg-red-600';
    return 'bg-blue-600';
};

const particulateMatter25GenerateIcon = (value?: number) => {
    if (value === null || value === undefined) return <div></div>;
    if (value <= 12.999) return <GoCheckCircleFill className='text-green-600' />;
    if (value >= 13 && value <= 55.999) return <IoIosWarning className='text-yellow-400' />;
    if (value >= 56) return <RiErrorWarningFill className='text-red-600' />;
    return <div></div>;
};

export const PM25MaxValue = 350;

const particulateMatter25Info = (
    <div className='text-xs flex flex-col gap-1'>
        <p>
            Partikulat Materi 2.5 (PM2.5) adalah partikel halus dengan diameter kurang dari 2.5 mikrometer yang dapat terhirup dan menyebabkan masalah kesehatan, seperti gangguan pernapasan dan penyakit jantung, serta berkontribusi pada
            polusi udara.
        </p>
        <p>
            Partikulat Materi 2.5 <span className='text-red-600 font-semibold'>lebih dari 250 {particulateMatter25Unit}</span> adalah Buruk.
        </p>
        <p>
            Partikulat Materi 2.5 <span className='text-red-600 font-semibold'>151 - 250 {particulateMatter25Unit}</span> adalah Sangat Tidak Sehat.
        </p>
        <p>
            Partikulat Materi 2.5 <span className='text-red-600 font-semibold'>56 - 150 {particulateMatter25Unit}</span> adalah Tidak Sehat.
        </p>
        <p>
            Partikulat Materi 2.5 <span className='text-yellow-400 font-semibold'>36 - 55 {particulateMatter25Unit}</span> adalah Tidak Sehat bagi Sensitif.
        </p>
        <p>
            Partikulat Materi 2.5 <span className='text-yellow-400 font-semibold'>13 - 35 {particulateMatter25Unit}</span> adalah Sedikit Tercemar.
        </p>
        <p>
            Partikulat Materi 2.5 <span className='text-green-600 font-semibold'>kurang dari 13 {particulateMatter25Unit}</span> adalah Baik.
        </p>
    </div>
);

export const generatePM25Badge = (value?: number): ReactNode => {
    if (value === null || value === undefined) return <div></div>;

    if (value > 250)
        return (
            <Badge
                variant="outline"
                className="text-red-600 text-sm"
            >
                Buruk
            </Badge>
        );
    if (value >= 151 && value <= 250)
        return (
            <Badge
                variant="outline"
                className="text-red-600 text-sm"
            >
                Sangat Tidak Sehat
            </Badge>
        );
    if (value >= 56 && value <= 150)
        return (
            <Badge
                variant="outline"
                className="text-red-600 text-sm"
            >
                Tidak Sehat
            </Badge>
        );
    if (value >= 36 && value <= 55)
        return (
            <Badge
                variant="outline"
                className="text-yellow-400 text-sm"
            >
                Tidak Sehat bagi Sensitif
            </Badge>
        );
    if (value >= 13 && value <= 35)
        return (
            <Badge
                variant="outline"
                className="text-yellow-400 text-sm"
            >
                Sedikit Tercemar
            </Badge>
        );
    if (value < 13)
        return (
            <Badge
                variant="outline"
                className="text-green-600 text-sm"
            >
                Baik
            </Badge>
        );

    return <div></div>;
};

export const particulateMatter25: SensorStaticData = {
    sensorTypeCode: particulateMatter25SensorTypeCode,
    title: particulateMatter25Title,
    subtitle: particulateMatter25Subtitle,
    unit: particulateMatter25Unit,
    generateColor: particulateMatter25GenerateColor,
    generateIcon: particulateMatter25GenerateIcon,
    info: particulateMatter25Info,
};
