// icons import
import { IoIosWarning } from 'react-icons/io';
import { RiErrorWarningFill } from 'react-icons/ri';
import { GoCheckCircleFill } from 'react-icons/go';

export const nitrogenDioxideSensorTypeCode = 'NO2';
export const nitrogenDioxideTitle = 'Nitrogen Dioksida';
export const nitrogenDioxideSubtitle = 'Kadar Nitrogren Dioksida (NO2) Area';

export const nitrogenDioxideGenerateColor = (value?: number) => {
  if (!value) return 'blue';
  if (value >= 40 && value <= 60) return 'green';
  if ((value < 40 && value >= 20) || (value > 60 && value <= 80)) return 'yellow';
  return 'red';
};

export const nitrogenDioxideGenerateIcon = (value?: number) => {
  if (!value) return <div></div>;
  if (value >= 40 && value <= 60) return <GoCheckCircleFill className='text-green-600' />;
  if ((value < 40 && value >= 20) || (value > 60 && value <= 80)) return <IoIosWarning className='text-yellow-400' />;
  return <RiErrorWarningFill className='text-red-600' />;
};
