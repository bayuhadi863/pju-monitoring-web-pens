// icons import
import { IoIosWarning } from 'react-icons/io';
import { RiErrorWarningFill } from 'react-icons/ri';
import { GoCheckCircleFill } from 'react-icons/go';

export const particulateMatterSensorTypeCode = 'PM';
export const particulateMatterTitle = 'Materi Partikulat';
export const particulateMatterSubtitle = 'Kadar Materi Partikulat Udara Area';

export const particulateMatterGenerateColor = (value?: number) => {
  if (!value) return 'blue';
  if (value >= 0 && value <= 60.99) return 'green';
  if (value >= 61 && value <= 120.99) return 'yellow';
  if (value >= 121) return 'red';
  return 'blue';
};

export const particulateMatterGenerateIcon = (value?: number) => {
  if (!value) return <div></div>;
  if (value >= 0 && value <= 60.99) return <GoCheckCircleFill className='text-green-600' />;
  if (value >= 61 && value <= 120.99) return <IoIosWarning className='text-yellow-400' />;
  if (value >= 121) return <RiErrorWarningFill className='text-red-600' />;
  return <div></div>;
};
