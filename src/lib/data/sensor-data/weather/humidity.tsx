// icons import
import { IoIosWarning } from 'react-icons/io';
import { RiErrorWarningFill } from 'react-icons/ri';
import { GoCheckCircleFill } from 'react-icons/go';

export const humiditySensorTypeCode = 'HUM';
export const humidityTitle = 'Humidity';
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
