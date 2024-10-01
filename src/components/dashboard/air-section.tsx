import React, { useState, useEffect } from 'react';
import BlockTitle from './block-title';
import SensorCard from './sensor-card';
import axios from 'axios';
import { SensorData } from '@/lib/types/sensor-data-type';
import io, { Socket } from 'socket.io-client';
import SensorSkeleton from '@/components/dashboard/sensor-skeleton';
import { carbonDioxide } from '@/lib/data/sensor-data/air-quality/carbon-dioxide';
import { oxygen } from '@/lib/data/sensor-data/air-quality/oxygen';
import { ozone } from '@/lib/data/sensor-data/air-quality/ozone';
import { nitrogenDioxide } from '@/lib/data/sensor-data/air-quality/nitrogen-dioxide';
import { sulfurDioxide } from '@/lib/data/sensor-data/air-quality/sulfur-dioxide';
import { particulateMatter25 } from '@/lib/data/sensor-data/air-quality/particulate-matter-25';
import { particulateMatter10 } from '@/lib/data/sensor-data/air-quality/particulate-matter-10';

const socket: Socket = io(import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000');

const AirSection: React.FC = () => {
  const apiBaseUrl = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000';
  const [data, setData] = useState<SensorData[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [, setIsUpdating] = useState<boolean>(false);

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(`${apiBaseUrl}/air-quality`);
      setData(response.data.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDataUpdate = async () => {
    setIsUpdating(true);
    await fetchData();
    setIsUpdating(false);
  };

  useEffect(() => {
    fetchData();
    socket.on('airQualityUpdate', handleDataUpdate);
    return () => {
      socket.off('airQualityUpdate');
    };
  }, []);

  const getSensorDataBySensorTypeCode = (code: string): SensorData | undefined => {
    return data.find((sensorData) => sensorData.code === code);
  };

  const carbonDioxideSensor = getSensorDataBySensorTypeCode(carbonDioxide.sensorTypeCode);
  const oxygenSensor = getSensorDataBySensorTypeCode(oxygen.sensorTypeCode);
  const ozoneSensor = getSensorDataBySensorTypeCode(ozone.sensorTypeCode);
  const nitrogenDioxideSensor = getSensorDataBySensorTypeCode(nitrogenDioxide.sensorTypeCode);
  const sulfurDioxideSensor = getSensorDataBySensorTypeCode(sulfurDioxide.sensorTypeCode);
  const particulateMatter25Sensor = getSensorDataBySensorTypeCode(particulateMatter25.sensorTypeCode);
  const particulateMatter10Sensor = getSensorDataBySensorTypeCode(particulateMatter10.sensorTypeCode);

  return (
    <section className='mt-4'>
      <BlockTitle>Data Sensor Kualitas Udara Terbaru</BlockTitle>
      {isLoading ? (
        <SensorSkeleton />
      ) : (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-2'>
          {carbonDioxideSensor && (
            <SensorCard
              title={carbonDioxide.title}
              subTitle={carbonDioxide.subtitle}
              value={carbonDioxideSensor.value}
              unit={carbonDioxide.unit}
              color={carbonDioxide.generateColor(carbonDioxideSensor.value)}
              icon={carbonDioxide.generateIcon(carbonDioxideSensor.value)}
              info={carbonDioxide.info}
            />
          )}
          {oxygenSensor && (
            <SensorCard
              title={oxygen.title}
              subTitle={oxygen.subtitle}
              value={oxygenSensor.value}
              unit={oxygen.unit}
              color={oxygen.generateColor(oxygenSensor.value)}
              icon={oxygen.generateIcon(oxygenSensor.value)}
              info={oxygen.info}
            />
          )}
          {ozoneSensor && (
            <SensorCard
              title={ozone.title}
              subTitle={ozone.subtitle}
              value={ozoneSensor.value}
              unit={ozone.unit}
              color={ozone.generateColor(ozoneSensor.value)}
              icon={ozone.generateIcon(ozoneSensor.value)}
              info={ozone.info}
            />
          )}
          {nitrogenDioxideSensor && (
            <SensorCard
              title={nitrogenDioxide.title}
              subTitle={nitrogenDioxide.subtitle}
              value={nitrogenDioxideSensor.value}
              unit={nitrogenDioxide.unit}
              color={nitrogenDioxide.generateColor(nitrogenDioxideSensor.value)}
              icon={nitrogenDioxide.generateIcon(nitrogenDioxideSensor.value)}
              info={nitrogenDioxide.info}
            />
          )}
          {sulfurDioxideSensor && (
            <SensorCard
              title={sulfurDioxide.title}
              subTitle={sulfurDioxide.subtitle}
              value={sulfurDioxideSensor.value}
              unit={sulfurDioxide.unit}
              color={sulfurDioxide.generateColor(sulfurDioxideSensor.value)}
              icon={sulfurDioxide.generateIcon(sulfurDioxideSensor.value)}
              info={sulfurDioxide.info}
            />
          )}
          {particulateMatter25Sensor && (
            <SensorCard
              title={particulateMatter25.title}
              subTitle={particulateMatter25.subtitle}
              value={particulateMatter25Sensor.value}
              unit={particulateMatter25.unit}
              color={particulateMatter25.generateColor(particulateMatter25Sensor.value)}
              icon={particulateMatter25.generateIcon(particulateMatter25Sensor.value)}
              info={particulateMatter25.info}
            />
          )}
          {particulateMatter10Sensor && (
            <SensorCard
              title={particulateMatter10.title}
              subTitle={particulateMatter10.subtitle}
              value={particulateMatter10Sensor.value}
              unit={particulateMatter10.unit}
              color={particulateMatter10.generateColor(particulateMatter10Sensor.value)}
              icon={particulateMatter10.generateIcon(particulateMatter10Sensor.value)}
              info={particulateMatter10.info}
            />
          )}
        </div>
      )}
    </section>
  );
};

export default AirSection;
