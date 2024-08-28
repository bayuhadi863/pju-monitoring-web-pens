import React from 'react';
import BlockTitle from './block-title';
import SensorCard from './sensor-card';
import { SensorData } from '@/lib/types/sensor-data-type';
import { carbonMonoxideTitle, carbonMonoxideSubtitle, carbonMonoxideSensorTypeCode, carbonMonoxideGenerateColor, carbonMonoxideGenerateIcon } from '@/lib/data/sensor-data/air-quality/carbon-monoxide';
import { nitrogenDioxideTitle, nitrogenDioxideSubtitle, nitrogenDioxideSensorTypeCode, nitrogenDioxideGenerateColor, nitrogenDioxideGenerateIcon } from '@/lib/data/sensor-data/air-quality/nitrogen-dioxide';
import { ozoneTitle, ozoneSubtitle, ozoneSensorTypeCode, ozoneGenerateColor, ozoneGenerateIcon } from '@/lib/data/sensor-data/air-quality/ozone';
import { particulateMatterTitle, particulateMatterSubtitle, particulateMatterSensorTypeCode, particulateMatterGenerateColor, particulateMatterGenerateIcon } from '@/lib/data/sensor-data/air-quality/particulate-matter';
import { sulfurDioxideTitle, sulfurDioxideSubtitle, sulfurDioxideSensorTypeCode, sulfurDioxideGenerateColor, sulfurDioxideGenerateIcon } from '@/lib/data/sensor-data/air-quality/sulfur-dioxide';

type AirSectionProps = {
  data: SensorData[];
};

const AirSection: React.FC<AirSectionProps> = ({ data }) => {
  const getSensorDataBySensorTypeCode = (code: string): SensorData | undefined => {
    return data.find((sensorData) => sensorData.sensorType.code === code);
  };

  const carbonMonoxideSensor = getSensorDataBySensorTypeCode(carbonMonoxideSensorTypeCode);
  const nitrogenDioxideSensor = getSensorDataBySensorTypeCode(nitrogenDioxideSensorTypeCode);
  const ozoneSensor = getSensorDataBySensorTypeCode(ozoneSensorTypeCode);
  const particulateMatterSensor = getSensorDataBySensorTypeCode(particulateMatterSensorTypeCode);
  const sulfurDioxideSensor = getSensorDataBySensorTypeCode(sulfurDioxideSensorTypeCode);

  return (
    <section className='mt-4'>
      <BlockTitle>Data Sensor Kualitas Udara Terbaru</BlockTitle>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-2'>
        {carbonMonoxideSensor && (
          <SensorCard
            title={carbonMonoxideTitle}
            subTitle={carbonMonoxideSubtitle}
            value={carbonMonoxideSensor.value}
            unit={carbonMonoxideSensor.sensorType.unit}
            color={carbonMonoxideGenerateColor(carbonMonoxideSensor.value)}
            icon={carbonMonoxideGenerateIcon(carbonMonoxideSensor.value)}
          />
        )}
        {nitrogenDioxideSensor && (
          <SensorCard
            title={nitrogenDioxideTitle}
            subTitle={nitrogenDioxideSubtitle}
            value={nitrogenDioxideSensor.value}
            unit={nitrogenDioxideSensor.sensorType.unit}
            color={nitrogenDioxideGenerateColor(nitrogenDioxideSensor.value)}
            icon={nitrogenDioxideGenerateIcon(nitrogenDioxideSensor.value)}
          />
        )}
        {ozoneSensor && (
          <SensorCard
            title={ozoneTitle}
            subTitle={ozoneSubtitle}
            value={ozoneSensor.value}
            unit={ozoneSensor.sensorType.unit}
            color={ozoneGenerateColor(ozoneSensor.value)}
            icon={ozoneGenerateIcon(ozoneSensor.value)}
          />
        )}
        {particulateMatterSensor && (
          <SensorCard
            title={particulateMatterTitle}
            subTitle={particulateMatterSubtitle}
            value={particulateMatterSensor.value}
            unit={particulateMatterSensor.sensorType.unit}
            color={particulateMatterGenerateColor(particulateMatterSensor.value)}
            icon={particulateMatterGenerateIcon(particulateMatterSensor.value)}
          />
        )}
        {sulfurDioxideSensor && (
          <SensorCard
            title={sulfurDioxideTitle}
            subTitle={sulfurDioxideSubtitle}
            value={sulfurDioxideSensor.value}
            unit={sulfurDioxideSensor.sensorType.unit}
            color={sulfurDioxideGenerateColor(sulfurDioxideSensor.value)}
            icon={sulfurDioxideGenerateIcon(sulfurDioxideSensor.value)}
          />
        )}
      </div>
    </section>
  );
};

export default AirSection;
