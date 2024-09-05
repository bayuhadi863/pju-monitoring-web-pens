// icons import
import { IoIosWarning } from 'react-icons/io';
import { RiErrorWarningFill } from 'react-icons/ri';
import { GoCheckCircleFill } from 'react-icons/go';

export const humiditySensorTypeCode = 'HUM';
export const humidityTitle = 'Kelembapan Udara';
export const humiditySubtitle = 'Tingkat Kelembapan Udara Area';

export const humidityGenerateColor = (value?: number) => {
  if (!value) return 'blue';
  if (value >= 40 && value <= 60) return 'green';
  if ((value < 40 && value >= 20) || (value > 60 && value <= 80)) return 'yellow';
  return 'red';
};

export const humidityGenerateIcon = (value?: number) => {
  if (!value) return <div></div>;
  if (value >= 40 && value <= 60) return <GoCheckCircleFill className='text-green-600' />;
  if ((value < 40 && value >= 20) || (value > 60 && value <= 80)) return <IoIosWarning className='text-yellow-400' />;
  return <RiErrorWarningFill className='text-red-600' />;
};

export const humidityInfo = (
  <div className='text-xs flex flex-col gap-1'>
    <p>Kelembapan udara adalah jumlah uap air yang terkandung dalam udara.</p>
    <p>
      Kelembapan udara yang ideal untuk kesehatan manusia adalah antara <span className='text-green-600'>40% hingga 60%</span>.
    </p>
    <p>Kelembapan udara yang terlalu rendah atau terlalu tinggi dapat menyebabkan masalah kesehatan dan kerusakan pada barang.</p>
  </div>
);
