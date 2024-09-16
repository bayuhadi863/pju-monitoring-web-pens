import React, { useState, useEffect } from 'react';
import BlockTitle from './block-title';
import SensorCard from './sensor-card';
import axios from 'axios';
import { SensorData } from '@/lib/types/sensor-data-type';
import io, { Socket } from 'socket.io-client';
import SensorSkeleton from '@/components/dashboard/sensor-skeleton';
import { humidity } from '@/lib/data/sensor-data/weather/humidity';
import { temperature } from '@/lib/data/sensor-data/weather/temperature';
import { solar } from '@/lib/data/sensor-data/weather/solar-radiation';
import { rainfall } from '@/lib/data/sensor-data/weather/rainfall-level';
import { windSpeed } from '@/lib/data/sensor-data/weather/wind-speed';
import { windDirection } from '@/lib/data/sensor-data/weather/wind-direction';
import { airPressure } from '@/lib/data/sensor-data/weather/air-pressure';

const socket: Socket = io(import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000');

const WeatherSection: React.FC = () => {
  const apiBaseUrl = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000';
  const [data, setData] = useState<SensorData[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [, setIsUpdating] = useState<boolean>(false);

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(`${apiBaseUrl}/weather`);
      setData(response.data.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleWeatherUpdate = async () => {
    setIsUpdating(true);
    await fetchData();
    setIsUpdating(false);
  };

  useEffect(() => {
    fetchData();
    socket.on('weatherUpdate', handleWeatherUpdate);
    return () => {
      socket.off('weatherUpdate');
    };
  }, []);

  const getSensorDataBySensorTypeCode = (code: string): SensorData | undefined => {
    return data.find((sensorData) => sensorData.code === code);
  };

  const humiditySensor = getSensorDataBySensorTypeCode(humidity.sensorTypeCode);
  const temperatureSensor = getSensorDataBySensorTypeCode(temperature.sensorTypeCode);
  const solarSensor = getSensorDataBySensorTypeCode(solar.sensorTypeCode);
  const rainfallSensor = getSensorDataBySensorTypeCode(rainfall.sensorTypeCode);
  const windSpeedSensor = getSensorDataBySensorTypeCode(windSpeed.sensorTypeCode);
  const windDirectionSensor = getSensorDataBySensorTypeCode(windDirection.sensorTypeCode);
  const airPressureSensor = getSensorDataBySensorTypeCode(airPressure.sensorTypeCode);

  return (
    <section className='mt-4'>
      <BlockTitle>Data Sensor Cuaca Terbaru</BlockTitle>

      {isLoading ? (
        <SensorSkeleton />
      ) : (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-2'>
          {humiditySensor && (
            <SensorCard
              title={humidity.title}
              subTitle={humidity.subtitle}
              value={humiditySensor.value}
              unit={humidity.unit}
              color={humidity.generateColor(humiditySensor.value)}
              icon={humidity.generateIcon(humiditySensor.value)}
              info={humidity.info}
            />
          )}
          {temperatureSensor && (
            <SensorCard
              title={temperature.title}
              subTitle={temperature.subtitle}
              value={temperatureSensor.value}
              unit={temperature.unit}
              color={temperature.generateColor(temperatureSensor.value)}
              icon={temperature.generateIcon(temperatureSensor.value)}
              info={temperature.info}
            />
          )}
          {solarSensor && (
            <SensorCard
              title={solar.title}
              subTitle={solar.subtitle}
              value={solarSensor.value}
              unit={solar.unit}
              color={solar.generateColor(solarSensor.value)}
              icon={solar.generateIcon(solarSensor.value)}
              info={solar.info}
            />
          )}
          {airPressureSensor && (
            <SensorCard
              title={airPressure.title}
              subTitle={airPressure.subtitle}
              value={airPressureSensor.value}
              unit={airPressure.unit}
              color={airPressure.generateColor(airPressureSensor.value)}
              icon={airPressure.generateIcon(airPressureSensor.value)}
              info={airPressure.info}
            />
          )}
          {rainfallSensor && (
            <SensorCard
              title={rainfall.title}
              subTitle={rainfall.subtitle}
              value={rainfallSensor.value}
              unit={rainfall.unit}
              color={rainfall.generateColor(rainfallSensor.value)}
              icon={rainfall.generateIcon(rainfallSensor.value)}
              info={rainfall.info}
            />
          )}
          {windSpeedSensor && (
            <SensorCard
              title={windSpeed.title}
              subTitle={windSpeed.subtitle}
              value={windSpeedSensor.value}
              unit={windSpeed.unit}
              color={windSpeed.generateColor(windSpeedSensor.value)}
              icon={windSpeed.generateIcon(windSpeedSensor.value)}
              info={windSpeed.info}
            />
          )}
          {windDirectionSensor && (
            <SensorCard
              title={windDirection.title}
              subTitle={windDirection.subtitle}
              value={windDirectionSensor.value}
              unit={windDirection.unit}
              color={windDirection.generateColor(windDirectionSensor.value)}
              icon={windDirection.generateIcon(windDirectionSensor.value)}
              info={windDirection.info}
            />
          )}
        </div>
      )}
    </section>
  );
};

export default WeatherSection;
