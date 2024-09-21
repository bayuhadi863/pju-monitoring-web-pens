// icons import
import { IoIosWarning } from 'react-icons/io';
import { RiErrorWarningFill } from 'react-icons/ri';
import { GoCheckCircleFill } from 'react-icons/go';
import { SensorStaticData } from '@/lib/types/sensor-data-type';

const carbonDioxideSensorTypeCode = 'CO2';
const carbonDioxideTitle = 'Karbon Dioksida';
const carbonDioxideSubtitle = 'Kadar Karbon Dioksida (CO₂) Area';
const carbonDioxideUnit = 'ppm';

const carbonDioxideGenerateColor = (value?: number) => {
  if (value === null || value === undefined) return 'blue';
  if (value >= 0 && value <= 1000.99) return 'green';
  if (value >= 1001 && value <= 2000.99) return 'yellow';
  if (value >= 2001) return 'red';
  return 'blue';
};

const carbonDioxideGenerateIcon = (value?: number) => {
  if (value === null || value === undefined) return <div></div>;
  if (value >= 0 && value <= 1000.99) return <GoCheckCircleFill className='text-green-600' />;
  if (value >= 1001 && value <= 2000.99) return <IoIosWarning className='text-yellow-400' />;
  if (value >= 2001) return <RiErrorWarningFill className='text-red-600' />;
  return <div></div>;
};

const carbonDioxideInfo = (
  <div className='text-xs flex flex-col gap-1'>
    <p>Karbon dioksida (CO₂) adalah gas yang tidak berwarna dan tidak berbau yang terbentuk dari hasil respirasi makhluk hidup dan pembakaran bahan bakar, serta berperan penting dalam efek rumah kaca.</p>
    <p>
      Karbon dioksida <span className='text-red-600 font-semibold'>lebih dari 10000 {carbonDioxideUnit}</span> adalah Berbahaya.
    </p>
    <p>
      Karbon dioksida <span className='text-red-600 font-semibold'>5001 - 10000 {carbonDioxideUnit}</span> adalah Sangat Tidak Sehat.
    </p>
    <p>
      Karbon dioksida <span className='text-red-600 font-semibold'>2001 - 5000 {carbonDioxideUnit}</span> adalah Tidak Sehat.
    </p>
    <p>
      Karbon dioksida <span className='text-yellow-400 font-semibold'>1001 - 2000 {carbonDioxideUnit}</span> adalah Tidak Sehat bagi Sensitif.
    </p>
    <p>
      Karbon dioksida <span className='text-green-600 font-semibold'>401 - 1000 {carbonDioxideUnit}</span> adalah Cukup Baik.
    </p>
    <p>
      Karbon dioksida <span className='text-green-600 font-semibold'>350 - 400 {carbonDioxideUnit}</span> adalah Baik.
    </p>
    <p>
      Karbon dioksida <span className='text-green-600 font-semibold'>kurang dari 350 {carbonDioxideUnit}</span> adalah Sangat Baik.
    </p>
  </div>
);

export const carbonDioxide: SensorStaticData = {
  sensorTypeCode: carbonDioxideSensorTypeCode,
  title: carbonDioxideTitle,
  subtitle: carbonDioxideSubtitle,
  unit: carbonDioxideUnit,
  generateColor: carbonDioxideGenerateColor,
  generateIcon: carbonDioxideGenerateIcon,
  info: carbonDioxideInfo,
};
