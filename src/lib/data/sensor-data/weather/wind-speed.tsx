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

export const windSpeedSensorTypeCode = 'WINDSPD';
export const windSpeedTitle = 'Kecepatan Angin';
export const windSpeedSubtitle = 'Kecepatan Angin Area';

export const windSpeedGenerateColor = (value?: number) => {
  if (!value) return 'blue';
  if (value >= 0 && value <= 7) return 'blue';
  if (value >= 8 && value <= 24) return 'green';
  if (value >= 25 && value <= 46) return 'yellow';
  if (value >= 47) return 'red';
  return 'blue';
};

export const windSpeedGenerateIcon = (value?: number) => {
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
};
