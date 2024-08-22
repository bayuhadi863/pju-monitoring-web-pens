// icons import
import { IoIosWarning } from 'react-icons/io';
import { RiErrorWarningFill } from 'react-icons/ri';
import { GoCheckCircleFill } from 'react-icons/go';
// libs import
import { SensorCardPropsType } from '@/libs/prop-types';

export const weatherDatas: SensorCardPropsType[] = [
  {
    title: 'Humidity',
    subtitle: 'Tingkat Kelembapan Udara Area',
    value: 90,
    unit: '%',
    color: 'green',
    icon: <GoCheckCircleFill className='text-green-600' />,
  },
  {
    title: 'Temperature',
    subtitle: 'Suhu Area',
    value: 32,
    unit: '°C',
    color: 'red',
    icon: <RiErrorWarningFill className='text-red-600' />,
  },
  {
    title: 'Solar Radiation',
    subtitle: 'Tingkat Radiasi Matahari Area',
    value: 4.08,
    unit: 'MJ/m2',
    color: 'yellow',
    icon: <IoIosWarning className='text-yellow-400' />,
  },
  {
    title: 'Rainfall Level',
    subtitle: 'Tingkat Curah Hujan Area',
    value: 9,
    unit: 'mm',
    color: 'yellow',
    icon: <IoIosWarning className='text-yellow-400' />,
  },
  {
    title: 'Wind Speed',
    subtitle: 'Kecepatan Angin Area',
    value: 12,
    unit: 'm/s',
    color: 'green',
    icon: <GoCheckCircleFill className='text-green-600' />,
  },
  {
    title: 'Water Level',
    subtitle: 'Tinggi Air Area',
    value: 32,
    unit: 'cm',
    color: 'green',
    icon: <GoCheckCircleFill className='text-green-600' />,
  },
  {
    title: 'Wind Direction',
    subtitle: 'Arah Angin Area',
    value: 192,
    unit: '°',
    // color: 'green',
  },
];