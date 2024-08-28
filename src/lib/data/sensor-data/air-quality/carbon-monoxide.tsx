// icons import
import { IoIosWarning } from 'react-icons/io';
import { RiErrorWarningFill } from 'react-icons/ri';
import { GoCheckCircleFill } from 'react-icons/go';

export const carbonMonoxideSensorTypeCode = 'CO';
export const carbonMonoxideTitle = 'Karbon Monoksida';
export const carbonMonoxideSubtitle = 'Kadar Karbon Monoksida (CO) Area';

export const carbonMonoxideGenerateColor = (value?: number) => {
  if (!value) return 'blue';
  if (value >= 0 && value <= 199.99) return 'green';
  if (value >= 200 && value <= 399.99) return 'yellow';
  if (value >= 400) return 'red';
  return 'blue';
};

export const carbonMonoxideGenerateIcon = (value?: number) => {
  if (!value) return <div></div>;
  if (value >= 0 && value <= 199.99) return <GoCheckCircleFill className='text-green-600' />;
  if (value >= 200 && value <= 399.99) return <IoIosWarning className='text-yellow-400' />;
  if (value >= 400) return <RiErrorWarningFill className='text-red-600' />;
  return <div></div>;
};
