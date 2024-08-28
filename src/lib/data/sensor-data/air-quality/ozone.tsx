// icons import
import { IoIosWarning } from 'react-icons/io';
import { RiErrorWarningFill } from 'react-icons/ri';
import { GoCheckCircleFill } from 'react-icons/go';

export const ozoneSensorTypeCode = 'O3';
export const ozoneTitle = 'Gas Ozon';
export const ozoneSubtitle = 'Kadar Gas Ozon (O3) Area';

export const ozoneGenerateColor = (value?: number) => {
  if (!value) return 'blue';
  if (value >= 0 && value <= 0.124) return 'green';
  if (value >= 0.125 && value <= 0.164) return 'yellow';
  if (value >= 0.165) return 'red';
  return 'blue';
};

export const ozoneGenerateIcon = (value?: number) => {
  if (!value) return <div></div>;
  if (value >= 0 && value <= 0.124) return <GoCheckCircleFill className='text-green-600' />;
  if (value >= 0.125 && value <= 0.164) return <IoIosWarning className='text-yellow-400' />;
  if (value >= 0.165) return <RiErrorWarningFill className='text-red-600' />;
  return <div></div>;
};
