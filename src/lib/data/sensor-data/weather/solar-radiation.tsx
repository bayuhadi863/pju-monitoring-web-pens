// icons import
import { IoIosWarning } from 'react-icons/io';
import { RiErrorWarningFill } from 'react-icons/ri';
import { GoCheckCircleFill } from 'react-icons/go';

export const solarSensorTypeCode = 'SOLAR';
export const solarTitle = 'Radiasi Matahari';
export const solarSubtitle = 'Tingkat Radiasi Matahari Area';

export const solarGenerateColor = (value?: number) => {
  if (!value) return 'blue';
  if (value >= 851.725 && value <= 1117.826) return 'green';
  if ((value < 851.725 && value >= 518.107) || (value > 60 && value <= 80)) return 'yellow';
  if ((value < 518.107 && value >= 101.084) || (value > 60 && value <= 80)) return 'red';
  return 'blue';
};

export const solarGenerateIcon = (value?: number) => {
  if (!value) return <div></div>;
  if (value >= 851.725 && value <= 1117.826) return <GoCheckCircleFill className='text-green-600' />;
  if ((value < 851.725 && value >= 518.107) || (value > 60 && value <= 80)) return <IoIosWarning className='text-yellow-400' />;
  if ((value < 518.107 && value >= 101.084) || (value > 60 && value <= 80)) return <RiErrorWarningFill className='text-red-600' />;
  return <div></div>;
};
