// icons import
import { IoIosWarning } from 'react-icons/io';
import { RiErrorWarningFill } from 'react-icons/ri';
import { GoCheckCircleFill } from 'react-icons/go';
import { SensorStaticData } from '@/lib/types/sensor-data-type';

const particulateMatter10SensorTypeCode = 'PM10';
const particulateMatter10Title = 'Partikulat Materi 10';
const particulateMatter10Subtitle = 'Partikulat Materi 10 Udara Area';
const particulateMatter10Unit = 'µg/m³';

const particulateMatter10GenerateColor = (value?: number) => {
  if (value === null || value === undefined) return 'blue';
  if (value >= 0 && value <= 60.99) return 'green';
  if (value >= 61 && value <= 120.99) return 'yellow';
  if (value >= 121) return 'red';
  return 'blue';
};

const particulateMatter10GenerateIcon = (value?: number) => {
  if (value === null || value === undefined) return <div></div>;
  if (value >= 0 && value <= 60.99) return <GoCheckCircleFill className='text-green-600' />;
  if (value >= 61 && value <= 120.99) return <IoIosWarning className='text-yellow-400' />;
  if (value >= 121) return <RiErrorWarningFill className='text-red-600' />;
  return <div></div>;
};

const particulateMatter10Info = (
  <div className='text-xs flex flex-col gap-1'>
    <p>
      Partikulat Materi 10 (PM10) adalah partikel-partikel udara dengan diameter kurang dari 10 mikrometer yang dapat terhirup dan menyebabkan masalah kesehatan seperti gangguan pernapasan dan penyakit jantung, serta berkontribusi pada polusi udara.
    </p>
    <p>
      Partikulat Materi 10 <span className='text-red-600 font-semibold'>0 - 49 {particulateMatter10Unit}</span> adalah Buruk.
    </p>
    <p>
      Partikulat Materi 10 <span className='text-red-600 font-semibold'>50 - 199 {particulateMatter10Unit}</span> adalah Sangat Rendah.
    </p>
    <p>
      Partikulat Materi 10 <span className='text-red-600 font-semibold'>200 - 399 {particulateMatter10Unit}</span> adalah Rendah.
    </p>
    <p>
      Partikulat Materi 10 <span className='text-yellow-400 font-semibold'>400 - 599 {particulateMatter10Unit}</span> adalah Sedang.
    </p>
    <p>
      Partikulat Materi 10 <span className='text-green-600 font-semibold'>600 - 799 {particulateMatter10Unit}</span> adalah Baik.
    </p>
    <p>
      Partikulat Materi 10 <span className='text-green-600 font-semibold'>800 - 1000+ {particulateMatter10Unit}</span> adalah Sangat Baik.
    </p>
  </div>
);

export const particulateMatter10: SensorStaticData = {
  sensorTypeCode: particulateMatter10SensorTypeCode,
  title: particulateMatter10Title,
  subtitle: particulateMatter10Subtitle,
  unit: particulateMatter10Unit,
  generateColor: particulateMatter10GenerateColor,
  generateIcon: particulateMatter10GenerateIcon,
  info: particulateMatter10Info,
};
