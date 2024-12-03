import React from 'react';
import { Battery, Zap, Gauge, Thermometer, Lightbulb } from 'lucide-react';

export type PjuMonitorStaticDataType = {
    code: 'POW' | 'CURR' | 'VOLT' | 'TEMP' | 'LUM';
    title: string;
    subTitle: string;
    unit: string;
    icon: React.ReactNode;
    value: number;
};

export const pjuMonitorStaticData: PjuMonitorStaticDataType[] = [
    {
        code: 'VOLT',
        title: 'Tegangan',
        subTitle: 'Tegangan Listrik PJU',
        unit: 'V',
        icon: <Gauge className='h-6 w-6 text-primary' />,
        value: 0,
    },
    {
        code: 'POW',
        title: 'Daya',
        subTitle: 'Daya Listrik PJU',
        unit: 'Watt',
        icon: <Battery className='h-6 w-6 text-primary' />,
        value: 0,
    },
    {
        code: 'CURR',
        title: 'Arus',
        subTitle: 'Arus Listrik PJU',
        unit: 'A',
        icon: <Zap className='h-6 w-6 text-primary' />,
        value: 0,
    },
    {
        code: 'TEMP',
        title: 'Suhu',
        subTitle: 'Suhu Device PJU',
        unit: '°C',
        icon: <Thermometer className='h-6 w-6 text-primary' />,
        value: 0,
    },
    {
        code: 'LUM',
        title: 'Intensitas Cahaya',
        subTitle: 'Tingkat Kecerahan Cahaya PJU',
        unit: 'Lux',
        icon: <Lightbulb className='h-6 w-6 text-primary' />,
        value: 0,
    },
];
