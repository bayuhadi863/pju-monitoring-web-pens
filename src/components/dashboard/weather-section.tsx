import React from 'react';
import BlockTitle from './block-title';
import SensorCard from './sensor-card';
import { SensorData } from '@/lib/types/sensor-data-type';
import { humidityTitle, humiditySubtitle, humiditySensorTypeCode, humidityGenerateColor, humidityGenerateIcon } from '@/lib/data/sensor-data/weather/humidity';
import { temperatureSensorTypeCode, temperatureTitle, temperatureSubtitle, temperatureGenerateColor, temperatureGenerateIcon } from '@/lib/data/sensor-data/weather/temperature';
import { solarSensorTypeCode, solarTitle, solarSubtitle, solarGenerateColor, solarGenerateIcon } from '@/lib/data/sensor-data/weather/solar-radiation';
import { rainfallSensorTypeCode, rainfallTitle, rainfallSubtitle, rainfallGenerateColor, rainfallGenerateIcon } from '@/lib/data/sensor-data/weather/rainfall-level';
import { windSpeedSensorTypeCode, windSpeedTitle, windSpeedSubtitle, windSpeedGenerateColor, windSpeedGenerateIcon } from '@/lib/data/sensor-data/weather/wind-speed';
import { waterLevelSensorTypeCode, waterLevelTitle, waterLevelSubtitle, waterLevelGenerateColor, waterLevelGenerateIcon } from '@/lib/data/sensor-data/weather/water-level';
import { windDirectionSensorTypeCode, windDirectionTitle, windDirectionSubtitle, windDirectionGenerateColor, windDirectionGenerateIcon } from '@/lib/data/sensor-data/weather/wind-direction';

type WeatherSectionProps = {
  data: SensorData[];
};

const WeatherSection: React.FC<WeatherSectionProps> = ({ data }) => {
  const getSensorDataBySensorTypeCode = (code: string): SensorData | undefined => {
    return data.find((sensorData) => sensorData.sensorType.code === code);
  };

  const humiditySensor = getSensorDataBySensorTypeCode(humiditySensorTypeCode);
  const temperatureSensor = getSensorDataBySensorTypeCode(temperatureSensorTypeCode);
  const solarSensor = getSensorDataBySensorTypeCode(solarSensorTypeCode);
  const rainfallSensor = getSensorDataBySensorTypeCode(rainfallSensorTypeCode);
  const waterLevelSensor = getSensorDataBySensorTypeCode(waterLevelSensorTypeCode);
  const windSpeedSensor = getSensorDataBySensorTypeCode(windSpeedSensorTypeCode);
  const windDirectionSensor = getSensorDataBySensorTypeCode(windDirectionSensorTypeCode);

  return (
    <section className='mt-4'>
      <BlockTitle>Data Sensor Cuaca Terbaru</BlockTitle>

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-2'>
        {humiditySensor && (
          <SensorCard
            title={humidityTitle}
            subTitle={humiditySubtitle}
            value={humiditySensor.value}
            unit={humiditySensor.sensorType.unit}
            color={humidityGenerateColor(humiditySensor.value)}
            icon={humidityGenerateIcon(humiditySensor.value)}
          />
        )}
        {temperatureSensor && (
          <SensorCard
            title={temperatureTitle}
            subTitle={temperatureSubtitle}
            value={temperatureSensor.value}
            unit={temperatureSensor.sensorType.unit}
            color={temperatureGenerateColor(temperatureSensor.value)}
            icon={temperatureGenerateIcon(temperatureSensor.value)}
          />
        )}
        {solarSensor && (
          <SensorCard
            title={solarTitle}
            subTitle={solarSubtitle}
            value={solarSensor.value}
            unit={solarSensor.sensorType.unit}
            color={solarGenerateColor(solarSensor.value)}
            icon={solarGenerateIcon(solarSensor.value)}
          />
        )}
        {rainfallSensor && (
          <SensorCard
            title={rainfallTitle}
            subTitle={rainfallSubtitle}
            value={rainfallSensor.value}
            unit={rainfallSensor.sensorType.unit}
            color={rainfallGenerateColor(rainfallSensor.value)}
            icon={rainfallGenerateIcon(rainfallSensor.value)}
          />
        )}
        {waterLevelSensor && (
          <SensorCard
            title={waterLevelTitle}
            subTitle={waterLevelSubtitle}
            value={waterLevelSensor.value}
            unit={waterLevelSensor.sensorType.unit}
            color={waterLevelGenerateColor(waterLevelSensor.value)}
            icon={waterLevelGenerateIcon(waterLevelSensor.value)}
          />
        )}
        {windSpeedSensor && (
          <SensorCard
            title={windSpeedTitle}
            subTitle={windSpeedSubtitle}
            value={windSpeedSensor.value}
            unit={windSpeedSensor.sensorType.unit}
            color={windSpeedGenerateColor(windSpeedSensor.value)}
            icon={windSpeedGenerateIcon(windSpeedSensor.value)}
          />
        )}
        {windDirectionSensor && (
          <SensorCard
            title={windDirectionTitle}
            subTitle={windDirectionSubtitle}
            value={windDirectionSensor.value}
            unit={windDirectionSensor.sensorType.unit}
            color={windDirectionGenerateColor(windDirectionSensor.value)}
            icon={windDirectionGenerateIcon(windDirectionSensor.value)}
          />
        )}
      </div>
    </section>
  );
};

export default WeatherSection;
