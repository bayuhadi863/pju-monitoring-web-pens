import {
  BsFillCloudRainFill,
  BsFillCloudRainHeavyFill,
  BsFillCloudLightningRainFill,
} from 'react-icons/bs';
import { SensorStaticData } from '@/lib/types/sensor-data-type';
import { ReactNode } from 'react';
import { Badge } from '@/components/ui/badge';

const rainfallSensorTypeCode = 'RAINFL';
const rainfallTitle = 'Curah Hujan';
const rainfallSubtitle = 'Tingkat Curah Hujan Area';
const rainfallUnit = 'mm';

const rainfallGenerateColor = (value?: number) => {
  if (value === null || value === undefined) return 'blue';
  if (value >= 0 && value <= 20) return 'green';
  if (value >= 20.0001 && value <= 99.9999) return 'yellow';
  if (value >= 100 && value <= 249.0) return 'red';
  return 'red';
};

export enum RainfallCategory {
  GOOD = 'good',
  MODERATE = 'moderate',
  BAD = 'bad',
  UNKNOWN = 'unknown',
}

export const getRainfallCategory = (value?: number): RainfallCategory => {
  if (value === null || value === undefined) return RainfallCategory.UNKNOWN;
  if (value >= 0 && value <= 20) return RainfallCategory.GOOD;
  if (value >= 20.0001 && value <= 99.9999) return RainfallCategory.MODERATE;
  if (value >= 100 && value <= 249.0) return RainfallCategory.BAD;
  return RainfallCategory.BAD;
};

const rainfallGenerateIcon = (value?: number) => {
  if (value === null || value === undefined) return <div></div>;
  if (value >= 0 && value <= 20)
    return <BsFillCloudRainHeavyFill className="text-green-600" />;
  if (value >= 25.0 && value <= 49.9)
    return <BsFillCloudRainFill className="text-yellow-400" />;
  if (value >= 50.0 && value <= 99.9)
    return <BsFillCloudLightningRainFill className="text-yellow-400" />;
  if (value >= 100 && value <= 249.0)
    return <BsFillCloudLightningRainFill className="text-red-600" />;
  return <BsFillCloudLightningRainFill className="text-red-600" />;
};

const rainfallInfo = (
  <div className="text-xs flex flex-col gap-1">
    <p>
      Curah hujan adalah jumlah hujan yang jatuh dalam satu periode waktu
      tertentu.
    </p>
    <p>
      Curah hujan{' '}
      <span className="text-green-600 font-semibold">0 mm</span> adalah
      Berawan.
    </p>
    <p>
      Curah hujan{' '}
      <span className="text-green-600 font-semibold">0,5 - 20 mm</span> adalah
      Hujan Ringan.
    </p>
    <p>
      Curah hujan{' '}
      <span className="text-yellow-400 font-semibold">20 - 50 mm</span> adalah
      Hujan Sedang.
    </p>
    <p>
      Curah hujan{' '}
      <span className="text-yellow-400 font-semibold">50,0 - 100 mm</span>{' '}
      adalah Hujan Lebat.
    </p>
    <p>
      Curah hujan{' '}
      <span className="text-red-600 font-semibold">100 - 150 mm</span> adalah
      Hujan Sangat Lebat.
    </p>
    <p>
      Curah hujan{' '}
      <span className="text-red-600 font-semibold">lebih dari 150 mm</span>{' '}
      adalah Hujan Ekstrem.
    </p>
  </div>
);

export const generateRainfallBadge = (value?: number): ReactNode => {
  if (value === null || value === undefined) return <div></div>;
  if (value >= 0 && value <= 0.4)
    return (
      <Badge variant="outline" className="text-green-600 text-sm">
        Tidak Hujan
      </Badge>
    );
  if (value > 0.4 && value <= 20)
    return (
      <Badge variant="outline" className="text-green-600 text-sm">
        Hujan Ringan
      </Badge>
    );
  if (value > 20 && value <= 50)
    return (
      <Badge variant="outline" className="text-yellow-400 text-sm">
        Hujan Sedang
      </Badge>
    );
  if (value > 50 && value <= 99.999)
    return (
      <Badge variant="outline" className="text-yellow-400 text-sm">
        Hujan Lebat
      </Badge>
    );
  if (value >= 100 && value <= 150)
    return (
      <Badge variant="outline" className="text-red-600 text-sm">
        Hujan Sangat Lebat
      </Badge>
    );
  if (value >150)
    return (
      <Badge variant="outline" className="text-red-600 text-sm">
        Hujan Ekstrem
      </Badge>
    );
  return <div></div>;
};

export const rainfall: SensorStaticData = {
  sensorTypeCode: rainfallSensorTypeCode,
  title: rainfallTitle,
  subtitle: rainfallSubtitle,
  unit: rainfallUnit,
  generateColor: rainfallGenerateColor,
  generateIcon: rainfallGenerateIcon,
  info: rainfallInfo,
};
