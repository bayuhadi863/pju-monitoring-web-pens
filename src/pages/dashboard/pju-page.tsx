/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import SensorCard from '@/components/dashboard/sensor-card';
import BlockTitle from '@/components/dashboard/block-title';
import { IoIosWarning } from 'react-icons/io';
import { RiErrorWarningFill } from 'react-icons/ri';
import { GoCheckCircleFill } from 'react-icons/go';
import { Card } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { Slider } from '@/components/ui/slider';
import Location from '@/components/dashboard/location';

const PjuPage: React.FC = () => {
  const pjuMonitoringDatas = [
    {
      title: 'Tegangan',
      subtitle: 'Besar Tegangan Listrik PJU',
      value: 6,
      unit: 'V',
      color: 'yellow',
      icon: <IoIosWarning className='text-yellow-400' />,
    },
    {
      title: 'Arus',
      subtitle: 'Besar Arus Listrik PJU',
      value: 3,
      unit: 'A',
      color: 'green',
      icon: <GoCheckCircleFill className='text-green-600' />,
    },
    {
      title: 'Daya',
      subtitle: 'Besar Daya Listrik PJU',
      value: 18,
      unit: 'W',
      color: 'green',
      icon: <GoCheckCircleFill className='text-green-600' />,
    },
    {
      title: 'Frekuensi',
      subtitle: 'Besar Frekuensi Listrik PJU',
      value: 144,
      unit: 'Hz',
      color: 'green',
      icon: <GoCheckCircleFill className='text-green-600' />,
    },
    {
      title: 'Cosphi',
      // subtitle: 'Sensor 3 subtitle',
      value: 0.977,
      // unit: 'W',
      color: 'red',
      icon: <RiErrorWarningFill className='text-red-600' />,
    },
    {
      title: 'Suhu',
      subtitle: 'Besar Suhu PJU',
      value: 40,
      unit: '°C',
      color: 'red',
      icon: <RiErrorWarningFill className='text-red-600' />,
    },
    {
      title: 'Intensitas Cahaya',
      subtitle: 'Besar Intensitas Cahaya PJU',
      value: 400,
      unit: 'Lumen',
      color: 'green',
      icon: <GoCheckCircleFill className='text-green-600' />,
    },
  ];

  return (
    <div className='mt-4'>
      <Location />
      <div className='flex flex-col lg:flex-row gap-4 mt-4'>
        <div className='lg:basis-2/3'>
          <BlockTitle>PJU Monitoring</BlockTitle>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mt-2'>
            {pjuMonitoringDatas.map((data, i) => (
              <SensorCard
                key={i}
                title={data.title}
                subTitle={data.subtitle}
                value={data.value}
                unit={data.unit}
                color={data.color}
                icon={data.icon}
              />
            ))}
          </div>
        </div>
        <div className='lg:basis-1/3'>
          <BlockTitle>PJU Kontrol</BlockTitle>
          <div className='mt-2 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-1 gap-4'>
            <Card className='p-3 shadow'>
              <div className='h-full flex justify-between items-center'>
                <div>
                  <h3 className='text-sm font-semibold'>Status Lampu</h3>
                  <p className='text-xs text-muted-foreground'>Nyalakan/Matikan Lampu PJU</p>
                </div>
                <div>
                  <Switch />
                </div>
              </div>
            </Card>
            <Card className='p-3 shadow'>
              <div>
                <h3 className='text-sm font-semibold'>Tingkat Kecerahan</h3>
                <p className='text-xs text-muted-foreground'>Atur Tingkat Kecerahan Lampu PJU</p>
              </div>
              <div className='mt-3 mb-2'>
                <Slider
                  defaultValue={[50]}
                  max={100}
                  min={0}
                  step={1}
                />
              </div>
            </Card>
            <Card className='p-3 shadow'>
              <div className='h-full flex justify-between items-center'>
                <div>
                  <h3 className='text-sm font-semibold'>Mode Otomatis</h3>
                  <p className='text-xs text-muted-foreground'>Aktifkan Mode Nyalakan/Matikan Lampu PJU Otomatis</p>
                </div>
                <div>
                  <Switch />
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PjuPage;
