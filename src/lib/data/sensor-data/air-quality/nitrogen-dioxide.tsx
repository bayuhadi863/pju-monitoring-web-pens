// icons import
import { IoIosWarning } from 'react-icons/io';
import { RiErrorWarningFill } from 'react-icons/ri';
import { GoCheckCircleFill } from 'react-icons/go';
import { SensorStaticData } from '@/lib/types/sensor-data-type';

const nitrogenDioxideSensorTypeCode = 'NO2';
const nitrogenDioxideTitle = 'Nitrogen Dioksida';
const nitrogenDioxideSubtitle = 'Kadar Nitrogren Dioksida (NO2) Area';
const nitrogenDioxideUnit = 'ppm';

const nitrogenDioxideGenerateColor = (value?: number) => {
  if (value === null || value === undefined) return 'blue';
  if (value >= 0 && value <= 4.99) return 'green';
  if (value >= 5 && value <= 20) return 'yellow';
  if (value >= 20.01) return 'red';
  return 'blue';
};

const nitrogenDioxideGenerateIcon = (value?: number) => {
  if (value === null || value === undefined) return <div></div>;
  if (value >= 0 && value <= 4.99) return <GoCheckCircleFill className='text-green-600' />;
  if (value >= 5 && value <= 20) return <IoIosWarning className='text-yellow-400' />;
  if (value >= 20.01) return <RiErrorWarningFill className='text-red-600' />;
  return <div></div>;
};

const nitrogenDioxideInfo = (
  <div className='text-xs flex flex-col gap-1'>
    <p>Radiasi matahari adalah energi yang dipancarkan oleh matahari dalam bentuk gelombang elektromagnetik.</p>
    <p>
      Radiasi matahari <span className='text-red-600 font-semibold'>0 - 49 {nitrogenDioxideUnit}</span> adalah Buruk.
    </p>
    <p>
      Radiasi matahari <span className='text-red-600 font-semibold'>50 - 199 {nitrogenDioxideUnit}</span> adalah Sangat Rendah.
    </p>
    <p>
      Radiasi matahari <span className='text-red-600 font-semibold'>200 - 399 {nitrogenDioxideUnit}</span> adalah Rendah.
    </p>
    <p>
      Radiasi matahari <span className='text-yellow-400 font-semibold'>400 - 599 {nitrogenDioxideUnit}</span> adalah Sedang.
    </p>
    <p>
      Radiasi matahari <span className='text-green-600 font-semibold'>600 - 799 {nitrogenDioxideUnit}</span> adalah Baik.
    </p>
    <p>
      Radiasi matahari <span className='text-green-600 font-semibold'>800 - 1000+ {nitrogenDioxideUnit}</span> adalah Sangat Baik.
    </p>
  </div>
);

export const nitrogenDioxide: SensorStaticData = {
  sensorTypeCode: nitrogenDioxideSensorTypeCode,
  title: nitrogenDioxideTitle,
  subtitle: nitrogenDioxideSubtitle,
  unit: nitrogenDioxideUnit,
  generateColor: nitrogenDioxideGenerateColor,
  generateIcon: nitrogenDioxideGenerateIcon,
  info: nitrogenDioxideInfo,
};