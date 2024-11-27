// icons import
import { IoIosWarning } from 'react-icons/io';
import { RiErrorWarningFill } from 'react-icons/ri';
import { GoCheckCircleFill } from 'react-icons/go';
import { SensorStaticData } from '@/lib/types/sensor-data-type';
import { Badge } from '@/components/ui/badge';
import { ReactNode } from 'react';

const nitrogenDioxideSensorTypeCode = 'NO2';
const nitrogenDioxideTitle = 'Nitrogen Dioksida';
const nitrogenDioxideSubtitle = 'Kadar Nitrogren Dioksida (NO2) Area';
const nitrogenDioxideUnit = 'ppm';

const nitrogenDioxideGenerateColor = (value?: number) => {
    if (value === null || value === undefined) return 'blue';
    if (value >= 0 && value <= 0.053) return 'green';
    if (value >= 0.054 && value <= 0.2) return 'yellow';
    if (value >= 0.201) return 'red';
    return 'blue';
};

export const nitrogenDioxideGenerateBgColor = (value?: number) => {
    if (value === null || value === undefined) return 'bg-blue-600';
    if (value >= 0 && value <= 0.053) return 'bg-green-600';
    if (value >= 0.054 && value <= 0.2) return 'bg-yellow-400';
    if (value >= 0.201) return 'bg-red-600';
    return 'bg-blue-600';
}

const nitrogenDioxideGenerateIcon = (value?: number) => {
    if (value === null || value === undefined) return <div></div>;
    if (value >= 0 && value <= 0.053) return <GoCheckCircleFill className='text-green-600' />;
    if (value >= 0.054 && value <= 0.2) return <IoIosWarning className='text-yellow-400' />;
    if (value >= 0.201) return <RiErrorWarningFill className='text-red-600' />;
    return <div></div>;
};

export const nitrogenDioxideMaxValue = 1.2;

const nitrogenDioxideInfo = (
    <div className='text-xs flex flex-col gap-1'>
        <p>Nitrogen dioksida (NO₂) adalah gas polutan beracun berwarna coklat kemerahan yang dihasilkan dari pembakaran bahan bakar fosil, dan dapat menyebabkan iritasi saluran pernapasan serta polusi udara.</p>
        <p>
            Nitrogen Dioksida <span className='text-red-600 font-semibold'>lebih dari 0.65 {nitrogenDioxideUnit}</span> adalah Berbahaya.
        </p>
        <p>
            Nitrogen Dioksida <span className='text-red-600 font-semibold'>0.361 - 0.649 {nitrogenDioxideUnit}</span> adalah Sangat Tidak Sehat.
        </p>
        <p>
            Nitrogen Dioksida <span className='text-red-600 font-semibold'>0.201 - 0.36 {nitrogenDioxideUnit}</span> adalah Tidak Sehat.
        </p>
        <p>
            Nitrogen Dioksida <span className='text-yellow-400 font-semibold'>0.101 - 0.2 {nitrogenDioxideUnit}</span> adalah Tidak Sehat bagi Sensitif.
        </p>
        <p>
            Nitrogen Dioksida <span className='text-yellow-400 font-semibold'>0.054 - 0.1 {nitrogenDioxideUnit}</span> adalah Sedikit Tercemar.
        </p>
        <p>
            Nitrogen Dioksida <span className='text-green-600 font-semibold'>kurang dari 0.054 {nitrogenDioxideUnit}</span> adalah Baik.
        </p>
    </div>
);

export const generateNitrogenDioxideBadge = (value?: number): ReactNode => {
    if (value === null || value === undefined) return <div></div>;
    if (value > 0.65)
        return (
            <Badge
                variant="outline"
                className="text-red-600 text-sm"
            >
                Berbahaya
            </Badge>
        );
    if (value >= 0.361 && value <= 0.649)
        return (
            <Badge
                variant="outline"
                className="text-red-600 text-sm"
            >
                Sangat Tidak Sehat
            </Badge>
        );
    if (value >= 0.201 && value <= 0.36)
        return (
            <Badge
                variant="outline"
                className="text-red-600 text-sm"
            >
                Tidak Sehat
            </Badge>
        );
    if (value >= 0.101 && value <= 0.2)
        return (
            <Badge
                variant="outline"
                className="text-yellow-400 text-sm"
            >
                Tidak Sehat bagi Sensitif
            </Badge>
        );
    if (value >= 0.054 && value <= 0.1)
        return (
            <Badge
                variant="outline"
                className="text-yellow-400 text-sm"
            >
                Sedikit Tercemar
            </Badge>
        );
    if (value < 0.054)
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

export const nitrogenDioxide: SensorStaticData = {
    sensorTypeCode: nitrogenDioxideSensorTypeCode,
    title: nitrogenDioxideTitle,
    subtitle: nitrogenDioxideSubtitle,
    unit: nitrogenDioxideUnit,
    generateColor: nitrogenDioxideGenerateColor,
    generateIcon: nitrogenDioxideGenerateIcon,
    info: nitrogenDioxideInfo,
};
