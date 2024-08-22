import { BsFillCloudRainFill, BsFillCloudRainHeavyFill, BsFillCloudLightningRainFill } from 'react-icons/bs';

export const rainfallSensorTypeCode = 'RAIN';
export const rainfallTitle = 'Rainfall Level';
export const rainfallSubtitle = 'Tingkat Curah Hujan Area';

export const rainfallGenerateColor = (value?: number) => {
  if (!value) return 'blue';
  if (value >= 0 && value <= 24.9) return 'green';
  if (value >= 25 && value <= 99.9) return 'yellow';
  if (value >= 100 && value <= 249.0) return 'red';
  return 'red';
};

export const rainfallGenerateIcon = (value?: number) => {
  if (!value) return <div></div>;
  if (value >= 0 && value <= 24.9) return <BsFillCloudRainHeavyFill className='text-green-600' />;
  if (value >= 25.0 && value <= 49.9) return <BsFillCloudRainFill className='text-yellow-400' />;
  if (value >= 50.0 && value <= 99.9) return <BsFillCloudLightningRainFill className='text-yellow-400' />;
  if (value >= 100 && value <= 249.0) return <BsFillCloudLightningRainFill className='text-red-600' />;
  return <BsFillCloudLightningRainFill className='text-red-600' />;
};
