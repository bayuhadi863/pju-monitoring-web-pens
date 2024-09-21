// icons import
import { TbTemperatureSnow, TbTemperatureSun } from 'react-icons/tb';
import { SensorStaticData } from '@/lib/types/sensor-data-type';

const temperatureSensorTypeCode = 'TEMP';
const temperatureTitle = 'Suhu';
const temperatureSubtitle = 'Suhu Area';
const temperatureUnit = '°C';

const temperatureGenerateColor = (value?: number) => {
  if (!value) return 'blue';
  if (value < 20) return 'blue';
  if (value >= 20 && value <= 25) return 'green';
  if (value > 25 && value <= 35) return 'yellow';
  return 'red';
};

const temperatureGenerateIcon = (value?: number) => {
  if (!value) return <div></div>;
  if (value < 20) return <TbTemperatureSnow className='text-blue-600' />;
  if (value >= 20 && value <= 25) return <TbTemperatureSun className='text-green-600' />;
  if (value > 25 && value <= 35) return <TbTemperatureSun className='text-yellow-400' />;
  return <TbTemperatureSun className='text-red-600' />;
};

const temperatureInfo = (
  <div className='text-xs flex flex-col gap-1'>
    <p>Suhu adalah ukuran rata-rata energi kinetik partikel dalam suatu benda.</p>
    <p>
      Suhu yang ideal untuk kesehatan manusia adalah antara <span className='text-green-600 font-semibold'>20°C - 25°C</span>.
    </p>
    <p>Suhu yang terlalu rendah atau terlalu tinggi dapat menyebabkan masalah kesehatan.</p>
  </div>
);

export const temperature: SensorStaticData = {
  sensorTypeCode: temperatureSensorTypeCode,
  title: temperatureTitle,
  subtitle: temperatureSubtitle,
  unit: temperatureUnit,
  generateColor: temperatureGenerateColor,
  generateIcon: temperatureGenerateIcon,
  info: temperatureInfo,
};