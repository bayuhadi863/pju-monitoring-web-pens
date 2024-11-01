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
  if (value >= 0 && value <= 0.03) return 'green';
  if (value >= 0.031 && value <= 0.2) return 'yellow';
  if (value >= 0.201) return 'red';
  return 'blue';
};

const sulfurDioxideGenerateIcon = (value?: number) => {
  if (value === null || value === undefined) return <div></div>;
  if (value >= 0 && value <= 0.03) return <GoCheckCircleFill className='text-green-600' />;
  if (value >= 0.031 && value <= 0.2) return <IoIosWarning className='text-yellow-400' />;
  if (value >= 0.201) return <RiErrorWarningFill className='text-red-600' />;
  return <div></div>;
};

const sulfurDioxideInfo = (
  <div className='text-xs flex flex-col gap-1'>
    <p>Sulfur dioksida (SO₂) adalah gas berbau tajam yang dihasilkan dari pembakaran bahan bakar fosil dan dapat menyebabkan iritasi saluran pernapasan serta berkontribusi pada polusi udara.</p>
    <p>
      Sulfur Dioksida <span className='text-red-600 font-semibold'>lebih dari 1.0 {sulfurDioxideUnit}</span> adalah Berbahaya.
    </p>
    <p>
      Sulfur Dioksida <span className='text-red-600 font-semibold'>0.501 - 1.0 {sulfurDioxideUnit}</span> adalah Sangat Tidak Sehat.
    </p>
    <p>
      Sulfur Dioksida <span className='text-red-600 font-semibold'>0.201 - 0.5 {sulfurDioxideUnit}</span> adalah Tidak Sehat.
    </p>
    <p>
      Sulfur Dioksida <span className='text-yellow-400 font-semibold'>0.101 - 0.2 {sulfurDioxideUnit}</span> adalah Tidak Sehat Bagi Sensitif.
    </p>
    <p>
      Sulfur Dioksida <span className='text-yellow-400 font-semibold'>0.031 - 0.1 {sulfurDioxideUnit}</span> adalah Sedikit Tercemar.
    </p>
    <p>
      Sulfur Dioksida <span className='text-green-600 font-semibold'>kurang dari 0.031 {sulfurDioxideUnit}</span> adalah Baik.
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
