// icons import
import { IoIosWarning } from 'react-icons/io';
import { RiErrorWarningFill } from 'react-icons/ri';
import { GoCheckCircleFill } from 'react-icons/go';
import { SensorStaticData } from '@/lib/types/sensor-data-type';

const oxygenSensorTypeCode = 'O2';
const oxygenTitle = 'Oksigen';
const oxygenSubtitle = 'Kadar Oksigen (O₂) Area';
const oxygenUnit = '%VOL';

const oxygenGenerateColor = (value?: number) => {
  if (value === null || value === undefined) return 'blue';
  if (value >= 20.9) return 'green';
  if (value >= 18 && value <= 20.899) return 'yellow';
  if (value <= 17.999) return 'red';
  return 'blue';
};

const oxygenGenerateIcon = (value?: number) => {
  if (value === null || value === undefined) return <div></div>;
  if (value >= 20.9) return <GoCheckCircleFill className='text-green-600' />;
  if (value >= 18 && value <= 20.899) return <IoIosWarning className='text-yellow-400' />;
  if (value <= 17.999) return <RiErrorWarningFill className='text-red-600' />;
  return <div></div>;
};

const oxygenInfo = (
  <div className='text-xs flex flex-col gap-1'>
    <p>Oksigen (O₂) adalah gas yang tidak berwarna dan tidak berbau yang esensial untuk respirasi makhluk hidup dan proses pembakaran.</p>
    <p>
      Oksigen <span className='text-red-600 font-semibold'>kurang dari 10 {oxygenUnit}</span> adalah Kritis.
    </p>
    <p>
      Oksigen <span className='text-red-600 font-semibold'>10 - 15.9 {oxygenUnit}</span> adalah Berbahaya.
    </p>
    <p>
      Oksigen <span className='text-red-600 font-semibold'>16 - 17.9 {oxygenUnit}</span> adalah Rendah.
    </p>
    <p>
      Oksigen <span className='text-yellow-400 font-semibold'>18 - 20.8 {oxygenUnit}</span> adalah Sedikit Kurang.
    </p>
    <p>
      Oksigen <span className='text-green-600 font-semibold'>20.9 - 21 {oxygenUnit}</span> adalah Normal.
    </p>
    <p>
      Oksigen <span className='text-green-600 font-semibold'>lebih dari 21 {oxygenUnit}</span> adalah Sangat Baik.
    </p>
  </div>
);

export const oxygen: SensorStaticData = {
  sensorTypeCode: oxygenSensorTypeCode,
  title: oxygenTitle,
  subtitle: oxygenSubtitle,
  unit: oxygenUnit,
  generateColor: oxygenGenerateColor,
  generateIcon: oxygenGenerateIcon,
  info: oxygenInfo,
};
