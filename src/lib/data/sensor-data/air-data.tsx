// icons import
import { IoIosWarning } from 'react-icons/io';
import { RiErrorWarningFill } from 'react-icons/ri';
import { GoCheckCircleFill } from 'react-icons/go';
// libs import
import { SensorCardPropsType } from '@/libs/prop-types';

export const airDatas: SensorCardPropsType[] = [
  {
    title: 'Carbon Monoxide',
    subtitle: 'Kadar Karbon Monoksida (CO) Area',
    icon: <RiErrorWarningFill className='text-red-600' />,
    value: 9000,
    unit: 'ppm',
    color: 'red',
  },
  {
    title: 'Ozone Gas',
    subtitle: 'Kadar Gas Ozon (O3) Area',
    icon: <IoIosWarning className='text-yellow-400' />,
    value: 10.0,
    unit: 'ppm',
    color: 'yellow',
  },
  {
    title: 'Particulate Matter',
    subtitle: 'Partikulat Udara Area',
    icon: <GoCheckCircleFill className='text-green-600' />,
    value: 20,
    unit: 'μg/m3',
    color: 'green',
  },
  {
    title: 'Nitrogren Dioxide',
    subtitle: 'Kadar Nitrogren Dioksida (NO2) Area',
    icon: <GoCheckCircleFill className='text-green-600' />,
    value: 3,
    unit: 'μg/m3',
    color: 'green',
  },
];