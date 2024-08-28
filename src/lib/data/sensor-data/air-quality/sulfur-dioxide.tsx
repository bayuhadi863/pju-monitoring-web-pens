// icons import
import { IoIosWarning } from 'react-icons/io';
import { RiErrorWarningFill } from 'react-icons/ri';
import { GoCheckCircleFill } from 'react-icons/go';

export const sulfurDioxideSensorTypeCode = 'SO2';
export const sulfurDioxideTitle = 'Sulfur Dioksida';
export const sulfurDioxideSubtitle = 'Kadar Sulfur Dioksida (SO2) Area';

export const sulfurDioxideGenerateColor = (value?: number) => {
  if (!value) return 'blue';
  if (value >= 0 && value <= 7.99) return 'green';
  if (value >= 8 && value <= 40.99) return 'yellow';
  if (value >= 50) return 'red';
  return 'blue';
};

export const sulfurDioxideGenerateIcon = (value?: number) => {
  if (!value) return <div></div>;
  if (value >= 0 && value <= 7.99) return <GoCheckCircleFill className='text-green-600' />;
  if (value >= 8 && value <= 40.99) return <IoIosWarning className='text-yellow-400' />;
  if (value >= 50) return <RiErrorWarningFill className='text-red-600' />;
  return <div></div>;
};
