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
  if (value >= 0 && value <= 50.999) return 'green';
  if (value >= 51 && value <= 150.999) return 'yellow';
  if (value >= 151) return 'red';
  return 'blue';
};

const particulateMatter10GenerateIcon = (value?: number) => {
  if (value === null || value === undefined) return <div></div>;
  if (value >= 0 && value <= 50.999) return <GoCheckCircleFill className='text-green-600' />;
  if (value >= 51 && value <= 150.999) return <IoIosWarning className='text-yellow-400' />;
  if (value >= 151) return <RiErrorWarningFill className='text-red-600' />;
  return <div></div>;
};

const particulateMatter10Info = (
  <div className='text-xs flex flex-col gap-1'>
    <p>
      Partikulat Materi 10 (PM10) adalah partikel-partikel udara dengan diameter kurang dari 10 mikrometer yang dapat terhirup dan menyebabkan masalah kesehatan seperti gangguan pernapasan dan penyakit jantung, serta berkontribusi pada polusi udara.
    </p>
    <p>
      Partikulat Materi 10 <span className='text-red-600 font-semibold'>lebih dari 350 {particulateMatter10Unit}</span> adalah Berbahaya.
    </p>
    <p>
      Partikulat Materi 10 <span className='text-red-600 font-semibold'>251 - 350 {particulateMatter10Unit}</span> adalah Sangat Tidak Sehat.
    </p>
    <p>
      Partikulat Materi 10 <span className='text-red-600 font-semibold'>151 - 250 {particulateMatter10Unit}</span> adalah Tidak Sehat.
    </p>
    <p>
      Partikulat Materi 10 <span className='text-yellow-400 font-semibold'>101 - 150 {particulateMatter10Unit}</span> adalah Tidak Sehat bagi Sensitif.
    </p>
    <p>
      Partikulat Materi 10 <span className='text-yellow-400 font-semibold'>51 - 100 {particulateMatter10Unit}</span> adalah Sedikit Tercemar.
    </p>
    <p>
      Partikulat Materi 10 <span className='text-green-600 font-semibold'>kurang dari 51 {particulateMatter10Unit}</span> adalah Baik.
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
