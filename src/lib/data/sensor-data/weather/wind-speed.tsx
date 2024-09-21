import {
  WiWindBeaufort0,
  WiWindBeaufort1,
  WiWindBeaufort2,
  WiWindBeaufort3,
  WiWindBeaufort4,
  WiWindBeaufort5,
  WiWindBeaufort6,
  WiWindBeaufort7,
  WiWindBeaufort8,
  WiWindBeaufort9,
  WiWindBeaufort10,
  WiWindBeaufort11,
  WiWindBeaufort12,
} from 'react-icons/wi';
import { SensorStaticData } from '@/lib/types/sensor-data-type';

const windSpeedSensorTypeCode = 'WINDSPD';
const windSpeedTitle = 'Kecepatan Angin';
const windSpeedSubtitle = 'Kecepatan Angin Area';
const windSpeedUnit = 'm/s';

const windSpeedGenerateColor = (value?: number) => {
  if (!value) return 'blue';
  if (value >= 0 && value <= 7) return 'blue';
  if (value >= 8 && value <= 24) return 'green';
  if (value >= 25 && value <= 46) return 'yellow';
  if (value >= 47) return 'red';
  return 'blue';
};

const windSpeedGenerateIcon = (value?: number) => {
  if (!value) return <div></div>;
  if (value < 1) return <WiWindBeaufort0 className='text-blue-600 text-2xl' />;
  if (value >= 1 && value <= 3) return <WiWindBeaufort1 className='text-blue-600 text-2xl' />;
  if (value >= 4 && value <= 7) return <WiWindBeaufort2 className='text-blue-600 text-2xl' />;
  if (value >= 8 && value <= 12) return <WiWindBeaufort3 className='text-green-600 text-2xl' />;
  if (value >= 13 && value <= 18) return <WiWindBeaufort4 className='text-green-600 text-2xl' />;
  if (value >= 19 && value <= 24) return <WiWindBeaufort5 className='text-green-600 text-2xl' />;
  if (value >= 25 && value <= 31) return <WiWindBeaufort6 className='text-yellow-400 text-2xl' />;
  if (value >= 32 && value <= 38) return <WiWindBeaufort7 className='text-yellow-400 text-2xl' />;
  if (value >= 39 && value <= 46) return <WiWindBeaufort8 className='text-yellow-400 text-2xl' />;
  if (value >= 47 && value <= 54) return <WiWindBeaufort9 className='text-red-600 text-2xl' />;
  if (value >= 55 && value <= 63) return <WiWindBeaufort10 className='text-red-600 text-2xl' />;
  if (value >= 64 && value <= 72) return <WiWindBeaufort11 className='text-red-600 text-2xl' />;
  if (value >= 73) return <WiWindBeaufort12 className='text-red-600 text-2xl' />;
  return <div></div>;
};

const windSpeedInfo = (
  <div className='text-xs flex flex-col gap-1'>
    <p>Kecepatan angin:</p>
    <p>
      <span className='text-blue-600 font-semibold'>kurang dari 1 mph</span> berstatus Tenang.
    </p>
    <p>
      <span className='text-blue-600 font-semibold'>1 - 3 mph</span> berstatus Udara Ringan.
    </p>
    <p>
      <span className='text-blue-600 font-semibold'>4-7 mph</span> berstatus Angin Sepoi-Sepoi Ringan.
    </p>
    <p>
      <span className='text-green-600 font-semibold'>8-12 mph</span> berstatus Angin Sepoi-Sepoi.
    </p>
    <p>
      <span className='text-green-600 font-semibold'>13-18 mph</span> berstatus Angin Sedang.
    </p>
    <p>
      <span className='text-green-600 font-semibold'>19-24 mph</span> berstatus Angin Segar.
    </p>
    <p>
      <span className='text-yellow-400 font-semibold'>25-31 mph</span> berstatus Angin Kencang Ringan.
    </p>
    <p>
      <span className='text-yellow-400 font-semibold'>32-38 mph</span> berstatus Angin Kencang Sedang.
    </p>
    <p>
      <span className='text-yellow-400 font-semibold'>39-46 mph</span> berstatus Angin Kencang.
    </p>
    <p>
      <span className='text-red-600 font-semibold'>47-54 mph</span> berstatus Angin Sangat Kencang.
    </p>
    <p>
      <span className='text-red-600 font-semibold'>55-63 mph</span> berstatus Angin Badai.
    </p>
    <p>
      <span className='text-red-600 font-semibold'>64-72 mph</span> berstatus Badai Dahsyat.
    </p>
    <p>
      <span className='text-red-600 font-semibold'>lebih dari 72 mph</span> berstatus Badai Sangat Dahsyat.
    </p>
  </div>
);

export const windSpeed: SensorStaticData = {
  sensorTypeCode: windSpeedSensorTypeCode,
  title: windSpeedTitle,
  subtitle: windSpeedSubtitle,
  unit: windSpeedUnit,
  generateColor: windSpeedGenerateColor,
  generateIcon: windSpeedGenerateIcon,
  info: windSpeedInfo,
};
