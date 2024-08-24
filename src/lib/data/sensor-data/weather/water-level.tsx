import { GoCheckCircleFill } from 'react-icons/go';
import { FaHouseFloodWater } from "react-icons/fa6";
import { MdFlood } from "react-icons/md";

export const waterLevelSensorTypeCode = 'WATER';
export const waterLevelTitle = 'Tinggi Air';
export const waterLevelSubtitle = 'Tinggi Air Area';

export const waterLevelGenerateColor = (value?: number) => {
  if (!value) return 'blue';
  if (value >= 0 && value <= 250) return 'blue';
  if (value >= 251 && value <= 300) return 'green';
  if (value >= 301 && value <= 350) return 'yellow';
  if (value >= 251 && value <= 400) return 'red';
  return 'red';
};

export const waterLevelGenerateIcon = (value?: number) => {
  if (!value) return <div></div>;
  if (value >= 0 && value <= 49) return <GoCheckCircleFill className='text-blue-600' />;
  if (value >= 50 && value <= 250) return <FaHouseFloodWater className='text-blue-600' />;
  if (value >= 251 && value <= 300) return <FaHouseFloodWater className='text-green-600' />;
  if (value >= 301 && value <= 350) return <FaHouseFloodWater className='text-yellow-400' />;
  if (value >= 251 && value <= 400) return <MdFlood className='text-red-600' />;
  return <MdFlood className='text-red-600' />;
};
