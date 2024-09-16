// icons import
import { IoIosWarning } from 'react-icons/io';
import { RiErrorWarningFill } from 'react-icons/ri';
import { GoCheckCircleFill } from 'react-icons/go';
import { SensorStaticData } from '@/lib/types/sensor-data-type';

const sulfurDioxideSensorTypeCode = 'SO2';
const sulfurDioxideTitle = 'Sulfur Dioksida';
const sulfurDioxideSubtitle = 'Kadar Sulfur Dioksida (SO2) Area';
const sulfurDioxideUnit = 'ppm';

const sulfurDioxideGenerateColor = (value?: number) => {
  if (value === null || value === undefined) return 'blue';
  if (value >= 0 && value <= 7.99) return 'green';
  if (value >= 8 && value <= 40.99) return 'yellow';
  if (value >= 50) return 'red';
  return 'blue';
};

const sulfurDioxideGenerateIcon = (value?: number) => {
  if (value === null || value === undefined) return <div></div>;
  if (value >= 0 && value <= 7.99) return <GoCheckCircleFill className='text-green-600' />;
  if (value >= 8 && value <= 40.99) return <IoIosWarning className='text-yellow-400' />;
  if (value >= 50) return <RiErrorWarningFill className='text-red-600' />;
  return <div></div>;
};

const sulfurDioxideInfo = (
  <div className='text-xs flex flex-col gap-1'>
    <p>Radiasi matahari adalah energi yang dipancarkan oleh matahari dalam bentuk gelombang elektromagnetik.</p>
    <p>
      Radiasi matahari <span className='text-red-600 font-semibold'>0 - 49 {sulfurDioxideUnit}</span> adalah Buruk.
    </p>
    <p>
      Radiasi matahari <span className='text-red-600 font-semibold'>50 - 199 {sulfurDioxideUnit}</span> adalah Sangat Rendah.
    </p>
    <p>
      Radiasi matahari <span className='text-red-600 font-semibold'>200 - 399 {sulfurDioxideUnit}</span> adalah Rendah.
    </p>
    <p>
      Radiasi matahari <span className='text-yellow-400 font-semibold'>400 - 599 {sulfurDioxideUnit}</span> adalah Sedang.
    </p>
    <p>
      Radiasi matahari <span className='text-green-600 font-semibold'>600 - 799 {sulfurDioxideUnit}</span> adalah Baik.
    </p>
    <p>
      Radiasi matahari <span className='text-green-600 font-semibold'>800 - 1000+ {sulfurDioxideUnit}</span> adalah Sangat Baik.
    </p>
  </div>
);

export const sulfurDioxide: SensorStaticData = {
  sensorTypeCode: sulfurDioxideSensorTypeCode,
  title: sulfurDioxideTitle,
  subtitle: sulfurDioxideSubtitle,
  unit: sulfurDioxideUnit,
  generateColor: sulfurDioxideGenerateColor,
  generateIcon: sulfurDioxideGenerateIcon,
  info: sulfurDioxideInfo,
};
