// icons import
import { IoIosWarning } from 'react-icons/io';
import { RiErrorWarningFill } from 'react-icons/ri';
import { GoCheckCircleFill } from 'react-icons/go';

export const nitrogenDioxideSensorTypeCode = 'NO2';
export const nitrogenDioxideTitle = 'Nitrogen Dioksida';
export const nitrogenDioxideSubtitle = 'Kadar Nitrogren Dioksida (NO2) Area';

export const nitrogenDioxideGenerateColor = (value?: number) => {
  if (!value) return 'blue';
  if (value >= 0 && value <= 4.99) return 'green';
  if (value >= 5 && value <= 20) return 'yellow';
  if (value >= 20.01) return 'red';
  return 'blue';
};

export const nitrogenDioxideGenerateIcon = (value?: number) => {
  if (!value) return <div></div>;
  if (value >= 0 && value <= 4.99) return <GoCheckCircleFill className='text-green-600' />;
  if (value >= 5 && value <= 20) return <IoIosWarning className='text-yellow-400' />;
  if (value >= 20.01) return <RiErrorWarningFill className='text-red-600' />;
  return <div></div>;
};
